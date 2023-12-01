const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const {nanoid} = require("nanoid");

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 5;

const validateUsernameLength = username => {
    return username.length < 20;
};

const validateEmail = email => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
};

const validateUnique = async value => {
    const user = await User.findOne({email: value});

    if (user) return false;
};

const validatePasswordLength = password => {
    return password.length > 7;
};

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [{
            validator: validateUnique,
            message: 'Пользователь с данной почтой уже зарегистрирован!'
        }, {
            validator: validateEmail,
            message: 'Неккоретный почтовый адрес!'
        }]
    },
    username: {
        type: String,
        required: true,
        validate: {
            validator: validateUsernameLength,
            message: 'Имя пользователя слишком длинное!'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: validatePasswordLength,
            message: 'Пароль слишком короткий!'
        }
    },
    token: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['artist', 'admin', 'user'],
        default: 'user',
    },
    avatarImage: {
        type: String,
        default: null
    },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
    this.token = nanoid();
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
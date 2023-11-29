const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const {nanoid} = require("nanoid");

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 5;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async value => {
                const user = await User.findOne({gmail: value});

                if (user) return false;
            },
            message: 'Пользователь уже зарегимтрирован!'
        }
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
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
    avatarImage: String,
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
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// router.post('/', async (req, res) => {
//     const {gmail, username, password} = req.body;
//
//     if (!gmail || !username || !password) {
//         return res.status(400).send({error: 'users/post!'});
//     }
//
//     const userData = {gmail, username, password, avatarImage: req.body.avatarImage || null};
//
//     try {
//         const user = new User(userData);
//         user.generateToken();
//
//         await user.save();
//         res.send(user);
//     } catch (e) {
//         res.status(400).send({error: e.errors});
//     }
// });

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        return res
            .status(401)
            .send({error: 'Неправильный логин или пароль!'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
        return res
            .status(401)
            .send({error: 'Неправильный логин или пароль!'});
    }

    user.generateToken();
    await user.save({validateBeforeSave: false});

    res.send({message: 'Успешная авторизация!', user});
});

// router.delete('/sessions', async (req, res) => {
//     const token = req.get('Authorization');
//     const success = {message: 'Success'};
//
//     if (!token) return res.send(success);
//
//     const user = await User.findOne({token});
//
//     if (!user) return res.send(success);
//
//     user.generateToken();
//     await user.save({validateBeforeSave: false});
//
//     return res.send({success, user});
// });

module.exports = router;


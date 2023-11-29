const express = require('express');
const exitHook = require('async-exit-hook');
const mongoose = require('mongoose');
const cors = require("cors");
const config = require('./config');

const users = require('./app/users');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/users', users);

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);
    console.log('Mongoose connected!');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    exitHook(() => {
        mongoose.disconnect();
        console.log('Mongoose disconnected!');
    });
};

run().catch(e => console.error(e));


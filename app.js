const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { MongoClient } = require('mongodb');
const app = express();
app.use(cors());

(async () => {
    const client = new MongoClient(process.env.DB_URL);
    await client.connect();
    const db = client.db('pointcloud');

    // const indexRouter = require('./routes/index');
    // const usersRouter = require('./routes/users');
    const pointcloudRouter = require('./routes/pointclouds')(db);


    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    // app.use('/', indexRouter);
    // app.use('/users', usersRouter);
    app.use('/pointclouds', pointcloudRouter);

})();
module.exports = app;


module.exports = app => {
    const roadBikes = require("../controllers/roadBike.controller.js");

    let router = require("express").Router();

    router.get('/bikes', roadBikes.getBikes);
    router.get('/bikes/:id', roadBikes.getBike);

    app.use('/', router);
};
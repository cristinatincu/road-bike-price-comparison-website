const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const RoadBike = require('../models').RoadBike;

// Retrieve bikes from the database.
exports.getBikes = (req, res) => {
    let search = req.query.search;
    const numItems = req.query.numItems ? parseInt(req.query.numItems): 24;
    const offset = req.query.offset ? parseInt(req.query.offset): 0;

    let condition = null;
    if (search) {
        search = '%' + search.replace(/\s/g, '%') + '%';
        condition = { "name": { [Op.like]: search} };
    }

    return RoadBike.findAndCountAll({
        limit: numItems,
        offset: offset,
        where: condition,
        subQuery: false,
        attributes: ['id', 'name', 'image_url']})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving road bikes."
            });
        });
};

// Retrieve comparsions for a bike from the database.
exports.getBike = (req, res) => {
    return RoadBike.findByPk(req.params.id, { include: ["roadBikes"] })
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving road bikes."
            });
        });
};
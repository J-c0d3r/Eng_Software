const Car = require('../application/car_service');
const Utils = require('../utils/utils');

const route = '/car';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Car.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.get(`${route}/listAll`, async (req, res) => {
        const response = await Car.listAll();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.put(`${route}/update`, async (req, res) => {
        const response = await Car.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.delete(`${route}/delete/:Marca&:Modelo`, async (req, res) => {
        const data = req.body;
        const { Marca, Modelo } = req.params;
        data.Marca = Marca;
        data.Modelo = Modelo;
        const response = await Car.delete(data);
        res.status(Utils.responseStatus(response.Modelo));
        res.json(response);
    });

};

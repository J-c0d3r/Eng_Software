const { CarModel } = require('../infrasctructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();

        } catch (error) {
            return error;
        }
    },

    async listAll() {
        try {
            const result = await CarModel.find().exec();
            return result;

        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const update = {
                Marca: data.Marca,
                Modelo: data.Modelo,
                Cor: data.Cor,
                Potencia: data.Potencia,
                Motor: data.Motor
            };
            const options = { new: true };
            const filter = {
                Marca: data.Marca,
                Modelo: data.Modelo
            };
            const result = await CarModel.findOneAndUpdate(filter, update, options).exec();
            console.log(result)
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const filter = {
                Marca: data.Marca,
                Modelo: data.Modelo
            };
            const result = await CarModel.deleteOne(filter).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    }
};

module.exports = CarRepository;
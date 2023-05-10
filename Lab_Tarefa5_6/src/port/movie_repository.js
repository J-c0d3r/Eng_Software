const { MovieModel } = require('../infrasctructure/database');

const MovieRepository = {
    async create(data) {
        try {
            const model = new MovieModel(data);
            const response = await model.save();
            return response.toObject();

        } catch (error) {
            return error;
        }
    },

    async listAll() {
        try {
            const result = await MovieModel.find().exec();
            return result;

        } catch (error) {
            return error;
        }
    }
};

module.exports = MovieRepository;
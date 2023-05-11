const mongoose = require('mongoose');

const uri = 'mongodb+srv://user:123@cluster0.fqmg0ps.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    Marca: String,
    Modelo: String,
    Cor: String,
    Potencia: String,
    Motor: String
});

const CarModel = mongoose.model('Car', CarSchema);

module.exports = {
    CarModel,
};

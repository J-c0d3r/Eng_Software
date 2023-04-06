const mongoose = require('mongoose');

// const uri = 'mongodb+srv://user_dev:123@cluster0.fqmg0ps.mongodb.net/?retryWrites=true&w=majority';
const uri = 'mongodb+srv://user:123@cluster0.fqmg0ps.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    Name: String,
    Film_Maker: String,
    Actors: Array,
    Year: String,
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
};
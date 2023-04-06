const create = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    film_maker: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    actors: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
    year: {
        presence: {
            allowEmpty: false,
        },
        type: 'int',
    },
};

const get = {
    name: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    get,
};
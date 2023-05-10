const create = {
    Name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Film_Maker: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Actors: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
    Year: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    Name: {
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
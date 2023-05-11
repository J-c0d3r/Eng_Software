const create = {
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Potencia: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Motor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    }
};

const get = {
    Marca: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
};

const update = {
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    Marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    Modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    get,
    update,
    deleteBy
};
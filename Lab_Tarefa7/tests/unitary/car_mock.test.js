const { CarModel } = require('./../../src/infrasctructure/database');
const Car = require('./../../src/port/car_repository');

describe('create', () => {

    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 10,
                Marca: "Citroen",
                Modelo: "C4",
                Cor: "Prata",
                Potencia: "120CV",
                Motor: "2.0"
            }),
        }));

        expect(await Car.create({
            id: 10,
            Marca: "Citroen",
            Modelo: "C4",
            Cor: "Prata",
            Potencia: "120CV",
            Motor: "2.0"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                Marca: expect.any(String),
                Modelo: expect.any(String),
                Cor: expect.any(String),
                Potencia: expect.any(String),
                Motor: expect.any(String),
            })
        )

    });
})
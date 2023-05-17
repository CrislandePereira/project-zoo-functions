const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => { });
it('Retorna a quantidade de elefantes', () => {
  expect(handlerElephants('count')).toEqual(4);
});
it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
  expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
});
it('Retorna a média de idades dos elefantes', () => {
  expect(handlerElephants('averageAge')).toStrictEqual(10.5);
});
it('Retorna a localização dos elefantes dentro do Zoológico', () => {
  expect(handlerElephants('location')).toBe('NW');
});
it('Retorna a popularidade dos elefantes', () => {
  expect(handlerElephants('popularity')).toStrictEqual(5);
});
it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
  expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
});

// Testar quando não passar opção válida
it('Retorna a mensagem: \'Parâmetro inválido, é necessário uma string\' quando recebe um parâmetro que não é string.', () => {
  expect(handlerElephants(10)).toStrictEqual('Parâmetro inválido, é necessário uma string');
});
it('Retorna undefined quando não recebe nenhum parâmetro.', () => {
  expect(handlerElephants()).toStrictEqual(undefined);
});

it('Retorna null quando recebe um parâmetro nulo.', () => {
  expect(handlerElephants(typeof null)).toStrictEqual(null);
});

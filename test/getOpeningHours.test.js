const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => { });
it('Retorna que o zoológico está fechado quando passado um dia que o zoológico não abre', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toStrictEqual('The zoo is closed');
});

it('Retorna que o zoológico está aberto quando passado um dia que o zoológico abre', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual('The zoo is open');
});

it('Retorna a agenda completa do zoológico quando não é passado nenhum argumento', () => {
  expect(getOpeningHours()).toStrictEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } });
});

it('Retorna uma mensagem quando o dia recebe um parametro que não é um dia válido', () => {
  expect(() => getOpeningHours('A')).toThrow('The day must be valid. Example: Monday');
});

it('Retorna uma mensagem quando a hora recebe um parametro que não é número', () => {
  expect(() => getOpeningHours('Monday', 'A')).toThrow('The hour should represent a number');
});

it('Retorna uma mensagem quando a hora recebe um parametro que não é número', () => {
  expect(() => getOpeningHours('Tuesday', 'A8:00-AM')).toThrow('The hour should represent a number');
});

it('Retorna uma mensagem quando passado um valor menor que 0 ou maior que 12 na hora', () => {
  expect(() => getOpeningHours('Monday', '18:00-AM')).toThrow('The hour must be between 0 and 12');
});

it('Retorna uma mensagem quando passado um valor menor que 0 ou maior que 59 nos minutos', () => {
  expect(() => getOpeningHours('Monday', '09:68-AM')).toThrow('The minutes must be between 0 and 59');
});

it('Retorna uma mensagem quando passado um parametro diferente de AM ou PM', () => {
  expect(() => getOpeningHours('Friday', '12:00-BM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
});

it('Retorna uma mensagem quando passado um parametro diferente de AM ou PM', () => {
  expect(() => getOpeningHours('Monday', '09:00-TM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
});

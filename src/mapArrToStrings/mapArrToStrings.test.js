const mapArrToStrings = require('./mapArrToStrings')

describe('Test mapArrToStrings function', () => {
  test('Should validate the value', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  })

  test('Should input mixed array', () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, 'asdf'])).toEqual(['1', '2', '3'])
  })

  test('Should input empty array', () => {
    expect(mapArrToStrings([])).toEqual([])
  })

  test('Should deny', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})
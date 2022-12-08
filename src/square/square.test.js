const square = require('./square')

describe('Test mapArrToStrings function', () => {
  let mockValue

  beforeEach(() => {
    // add to DB
  })
  beforeAll(() => {

  })

  test('Should validate the value', () => {
    // expect(square(2)).toEqual(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('Should not call pow', () => {
    // expect(square(2)).toEqual(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  afterAll(() => {

  })
})
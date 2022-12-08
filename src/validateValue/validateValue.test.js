const validateValue = require('./validateValue')

// simple test
test('Should validate the value', () => {
  expect(validateValue(50)).toBe(true)
})

// wrapper
describe('Test validateValue function', () => {
  test('Should validate the value', () => {
    expect(validateValue(50)).toBe(true)
  })

  test('Should be less then correct value', () => {
    expect(validateValue(-1)).toBe(false)
  })

  test('Should be more then correct value', () => {
    expect(validateValue(101)).toBe(false)
  })

  test('Should be min correct value', () => {
    expect(validateValue(0)).toBe(true)
  })

  test('Should be max correct value', () => {
    expect(validateValue(0)).toBe(true)
  })
})

const delay = require('./delay')
const square = require('./delay')

describe('Test delay function', () => {
  
  test('Should validate the value', async () => {
   const sum = await delay(() => 5 + 5, 1000)

   expect(sum).toBe(10)
  })
})
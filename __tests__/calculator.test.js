import Calculator from './../src/js/Calculator.js'
describe("Calculator", () => {
  test("should correctly construct a calculator object based on a user's inputted age", () => {
    const person = new Calculator(50, "male", "USA")
    expect(person.age).toEqual(50)
    expect(person.gender).toEqual("male")
    expect(person.country).toEqual("USA")
  })
})

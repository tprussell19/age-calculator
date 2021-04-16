import Calculator from './../src/js/Calculator.js'
describe("Calculator", () => {
  let person;
  beforeEach(() => {
    person = new Calculator(50, "male", "USA")
  });

  test("should correctly construct a calculator object based on a user's inputted age", () => {
    expect(person.age).toEqual(50)
    expect(person.gender).toEqual("male")
    expect(person.country).toEqual("USA")
  })

  test("should correctly calculate the age of a person in Mercury years", () => {
    person.mercuryCalc()
    expect(person.mercuryAge).toEqual(208.33)
  })

  test("should correctly calculate the age of a person in Venus years", () => {
    person.venusCalc()
    expect(person.venusAge).toEqual(80.65)
  })

  test("should correctly calculate the age of a person in Mars years", () => {
    person.marsCalc()
    expect(person.marsAge).toEqual(26.60)
  })

  test("should correctly calculate the age of a person in Jupiter years", () => {
    person.jupiterCalc()
    expect(person.jupiterAge).toEqual(4.22)
  })

})

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
  
  test("should correctly calculate the life expectancy of the user given their gender is 'female' and country of residence is 'USA'", () => {
    const newPerson = new Calculator(0, "female", "USA")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(81.2)
  })
  
  test("should correctly calculate the life expectancy of the user given their gender is 'male' and country of residence is 'USA'", () => {
    person.earthExpectancy()
    expect(person.earthLife).toEqual(76.2)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'non-binary/gender-fluid' and country of residence is 'USA'", () => {
    const newPerson = new Calculator(0, "non-binary/gender-fluid", "USA")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(78.7)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'other' and country of residence is 'USA'", () => {
    const newPerson = new Calculator(0, "other", "USA")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(78.7)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'prefer not to say' and country of residence is 'USA'", () => {
    const newPerson = new Calculator(0, "prefer not to say", "USA")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(78.7)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'female' and country of residence is not 'USA'", () => {
    const newPerson = new Calculator(0, "female", "Canada")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(75.2)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'male' and country of residence is not 'USA'", () => {
    const newPerson = new Calculator(0, "male", "Canada")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(70.4)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'non-binary/gender-fluid' and country of residence is not 'USA'", () => {
    const newPerson = new Calculator(0, "non-binary/gender-fluid", "Canada")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(72.6)
  })

})

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
    expect(person.mercuryAge).toEqual(208.3)
  })

  test("should correctly calculate the age of a person in Venus years", () => {
    person.venusCalc()
    expect(person.venusAge).toEqual(80.6)
  })

  test("should correctly calculate the age of a person in Mars years", () => {
    person.marsCalc()
    expect(person.marsAge).toEqual(26.6)
  })

  test("should correctly calculate the age of a person in Jupiter years", () => {
    person.jupiterCalc()
    expect(person.jupiterAge).toEqual(4.2)
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

  test("should correctly calculate the life expectancy of the user given their gender is 'other' and country of residence is not 'USA'", () => {
    const newPerson = new Calculator(0, "other", "Canada")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(72.6)
  })

  test("should correctly calculate the life expectancy of the user given their gender is 'prefer not to say' and country of residence is not 'USA'", () => {
    const newPerson = new Calculator(0, "prefer not to say", "Canada")
    newPerson.earthExpectancy()
    expect(newPerson.earthLife).toEqual(72.6)
  })

  test("should accurately return how many years a user has left to live on Earth", () => {
    person.earthExpectancy()
    person.yearsLeft()
    expect(person.earthYearsLeft).toEqual(26.2)
  })

  test("should accurately return how many years a user has left to live on Mercury", () => {
    person.earthExpectancy()
    person.mercuryCalc()
    person.yearsLeft()
    expect(person.mercuryYearsLeft).toEqual(-132.1)
  })

  test("should accurately return how many years a user has left to live on Venus", () => {
    person.earthExpectancy()
    person.venusCalc()
    person.yearsLeft()
    expect(person.venusYearsLeft).toEqual(-4.4)
  })

  test("should accurately return how many years a user has left to live on Mars", () => {
    person.earthExpectancy()
    person.marsCalc()
    person.yearsLeft()
    expect(person.marsYearsLeft).toEqual(49.6)
  })

  test("should accurately return how many years a user has left to live on Jupiter", () => {
    person.earthExpectancy()
    person.jupiterCalc()
    person.yearsLeft()
    expect(person.jupiterYearsLeft).toEqual(72.0)
  })

  test("should provide a different return given positive or negative life expectancy on Earth", () => {
    person.earthExpectancy()
    person.yearsLeft()
    person.earthReturnText()
    expect(person.earthReturn).toEqual("Hooray! The average life expectancy on Earth is still 26.2 years away for you!")
  })

  test("should provide a different return given age = life expectancy on Earth", () => {
    const newPerson = new Calculator(81.2, "female", "USA")
    newPerson.earthExpectancy()
    newPerson.yearsLeft()
    newPerson.earthReturnText()
    expect(newPerson.earthReturn).toEqual("Wow! You have exactly reached the average life expectancy for a person in your demographic categories!")
  })

  test("should provide a different return given age > life expectancy on Earth", () => {
    const newPerson = new Calculator(91.5, "female", "USA")
    newPerson.earthExpectancy()
    newPerson.yearsLeft()
    newPerson.earthReturnText()
    expect(newPerson.earthReturn).toEqual("Congrats! You have already passed the average life expectancy for a person in your demographic categories on Earth by 10.3 years!")
  })

  test("should provide a different return given age < life expectancy on Mercury", () => {
    const newPerson = new Calculator(15, "non-binary/gender-fluid", "Mexico")
    newPerson.earthExpectancy()
    newPerson.mercuryCalc()
    newPerson.yearsLeft()
    newPerson.mercuryReturnText()
    expect(newPerson.mercuryReturn).toEqual("Hooray! The average life expectancy on Mercury is still 10.1 years away for you!")
  })

  test("should provide a different return given age = life expectancy on Mercury", () => {
    const newPerson = new Calculator(17.424, "non-binary/gender-fluid", "Mexico")
    newPerson.earthExpectancy()
    newPerson.mercuryCalc()
    newPerson.yearsLeft()
    newPerson.mercuryReturnText()
    expect(newPerson.mercuryReturn).toEqual("Wow! You have exactly reached the average life expectancy for a person in your demographic categories on Mercury!")
  })

  test("should provide a different return given age > life expectancy on Mercury", () => {
    const newPerson = new Calculator(35, "non-binary/gender-fluid", "Mexico")
    newPerson.earthExpectancy()
    newPerson.mercuryCalc()
    newPerson.yearsLeft()
    newPerson.mercuryReturnText()
    expect(newPerson.mercuryReturn).toEqual("Congrats! You have already passed the average life expectancy for a person in your demographic categories on Mercury by 73.2 years!")
  })

})

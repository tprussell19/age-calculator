export default class Calculator {
  constructor(age, gender, country) {
    this.age = age
    this.gender = gender
    this.country = country
  }

  mercuryCalc() {
    this.mercuryAge = parseFloat((this.age / .24).toFixed(1))
  }

  venusCalc() {
    this.venusAge = parseFloat((this.age / .62).toFixed(1))
  }

  marsCalc() {
    this.marsAge = parseFloat((this.age / 1.88).toFixed(1))
  }

  jupiterCalc() {
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(1))
  }

  earthExpectancy() {
    if (this.country === "USA") {
      if (this.gender === "female") {
        this.earthLife = 81.2
      } else if (this.gender === "male") {
        this.earthLife = 76.2
      } else if (this.gender === "non-binary/gender-fluid") {
        this.earthLife = 78.7
      } else if (this.gender === "other") {
        this.earthLife = 78.7
      } else if (this.gender === "prefer not to say") {
        this.earthLife = 78.7
      }
    } else {
      if (this.gender === "female") {
        this.earthLife = 75.2
      } else if (this.gender === "male") {
        this.earthLife = 70.4
      } else if (this.gender === "non-binary/gender-fluid") {
        this.earthLife = 72.6
      } else if (this.gender === "other") {
        this.earthLife = 72.6
      } else if (this.gender === "prefer not to say") {
        this.earthLife = 72.6
      }
    }
  }

  yearsLeft() {
    this.earthYearsLeft = parseFloat((this.earthLife - this.age).toFixed(1))
    this.mercuryYearsLeft = parseFloat((this.earthLife - this.mercuryAge).toFixed(1))
    this.venusYearsLeft = parseFloat((this.earthLife - this.venusAge).toFixed(1))
    this.marsYearsLeft = parseFloat((this.earthLife - this.marsAge).toFixed(1))
    this.jupiterYearsLeft = parseFloat((this.earthLife - this.jupiterAge).toFixed(1))
  }

  earthReturnText() {
    this.earthReturn;
    if (this.earthYearsLeft > 0) {
      this.earthReturn = "Hooray! The average life expectancy on Earth is still " + `${this.earthYearsLeft}` + " years away for you!"
      return this.earthReturn
    } else if (this.earthYearsLeft === 0) {
      this.earthReturn = "Wow! You have exactly reached the average life expectancy for a person in your demographic categories!"
      return this.earthReturn
    } else {
      this.earthReturn;
      this.earthYearsLeft = -this.earthYearsLeft
      this.earthReturn = "Congrats! You have already passed the average life expectancy for a person in your demographic categories on Earth by " + `${this.earthYearsLeft}` + " years!"
      return this.earthReturn
    }
  }

  mercuryReturnText() {
    this.mercuryReturn;
    if (this.mercuryYearsLeft > 0) {
      this.mercuryReturn = "Hooray! The average life expectancy on Mercury is still " + `${this.mercuryYearsLeft}` + " years away for you!"
      return this.mercuryReturn
    } else if (this.mercuryYearsLeft === 0) {
      this.mercuryReturn = "Wow! You have exactly reached the average life expectancy for a person in your demographic categories on Mercury!"
      return this.mercuryReturn
    }
  }

}
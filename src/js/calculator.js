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
  }

}
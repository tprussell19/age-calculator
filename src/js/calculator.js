export default class Calculator {
  constructor(age, gender, country) {
    this.age = age
    this.gender = gender
    this.country = country
  }

  mercuryCalc() {
    this.mercuryAge = parseFloat((this.age / .24).toFixed(2))
  }

  venusCalc() {
    
  }

}
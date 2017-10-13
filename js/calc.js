export class Calculator {

  constructor(age, dateEntered) {
    this.age = age;
    this.dateEntered = dateEntered;
  }

  checkAgeInSeconds(age) {
    const timeCount = 31536000;
    let ageInSeconds = age * secondsInYear;
    return ageInSeconds;
  }

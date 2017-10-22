export class Calculator {

  constructor(birthday, currentDate) {
    this.birthday = birthday;
    this.currentDate = currentDate;
    this.expectancy = 0;
  }

  constructorB(birthday, currentDate, region) {
    super.birthday = birthday;
    super.currentDate = currentDate;
    this.region = region;
  }

  checkAgeInSeconds() {
    let currentDateSeconds= this.currentDate.getTime();
    let birthdaySeconds = this.birthday.getTime();
    let difference = currentDateSeconds - birthdaySeconds;
    let secondsAge = Math.floor(difference / 1000);
    return secondsAge;
  }

}

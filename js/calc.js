export class Calculator {

  constructor(age, birthday, currentDate, region) {
    this.age = age;
    this.birthday = birthday;
    this.curretDate = currentDate;
    this.region = region:
  }

  checkAgeInSeconds(age) {
    const timeCount = 31536000;
    let ageInSeconds = age * secondsInYear;
    return ageInSeconds;
  }

  findAge(date){
    let currentDate = this.currendDate.getTime(); //10-13-17
    let birthday = this.birthday.getTime(); // 12-25-1994
    let yearsOld = currentDate.getFullYear() - birthday.getFullYear(); //2017-1994
    let difference = Math.floor(yearsOld / 1000);
    return difference;
  }

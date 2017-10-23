export class Calculator {

  constructor(birthday, currentDate) {
    this.birthday = birthday;
    this.currentDate = currentDate;
    this.expectancy = 0;
  }

  constructorB(birthday, currentDate, continent) {
    super.birthday = birthday;
    super.currentDate = currentDate;
    this.region = continent;
  }

  checkAgeInSeconds() {
    let currentDateSeconds= this.currentDate.getTime();
    let birthdaySeconds = this.birthday.getTime();
    let difference = currentDateSeconds - birthdaySeconds;
    let secondsAge = Math.floor(difference / 1000);
    return secondsAge;
  }

  mercury(secondsAge) {
     const earth = 31536000;
     let input = secondsAge / (earth * .24);
     let age = parseFloat(input.toFixed(2));
     return age;
   }

   venus(secondsAge) {
     const earth = 31536000;
     let input = secondsAge / (earth * .62);
     let age = parseFloat(input.toFixed(2));
     return age;
   }

   mars(secondsAge) {
     const earth = 31536000;
     let input = secondsAge / (earth * 1.88);
     let age = parseFloat(input.toFixed(2));
     return age;
   }

   jupiter(secondsAge) {
     const earth = 31536000;
     let input = secondsAge / (earth * 11.86);
     let age = parseFloat(input.toFixed(2));
     return age;
   }

   continent() {
   let continentAge = 0;
   age = number(document.getElementById("age").value);
   if(continent === "northAmerica") {
     continentAge = 75;
   } else if (continent === "southAmerica") {
     continentAge = 65;
   } else if (continent === "europe") {
     continentAge = 80;
   } else if (continent === "africa") {
     continentAge = 60;
   } else if (continent === "asia") {
     continentAge = 85;
   } else if (continent === "australia") {
     continentAge = 75;
   } else {
     continentAge = 80;
   } return continentAge;

   }
  }

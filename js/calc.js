export class Calculator {

  constructor(birthday, currentDate, continent) {
    this.birthday = birthday;
    this.currentDate = currentDate;
    this.continent = continent;

  }

  checkAgeInSeconds() {
    let currentDateSeconds= this.currentDate.getTime();
    let birthdaySeconds = this.birthday.getTime();
    let difference = currentDateSeconds - birthdaySeconds;
    let secondsAge = Math.floor(difference / 1000);
    return secondsAge;
  }


  getLifeExpectancy() {
      let continentAge = 80;

      if(this.continent === "northAmerica") {
        continentAge = 75;
      } else if (this.continent === "southAmerica") {
        continentAge = 65;
      } else if (this.continent === "europe") {
        continentAge = 80;
      } else if (this.continent === "africa") {
        continentAge = 60;
      } else if (this.continent === "asia") {
        continentAge = 85;
      } else if (this.continent === "australia") {
        continentAge = 75;
      } else {
        continentAge = 80;
      }
      console.info("age seconds:" + this.checkAgeInSeconds()
                  + " continentAge:" + continentAge);
      //you are old already don't get to live that much longer
      if(this.checkAgeInSeconds() > continentAge*31536000){

            continentAge = continentAge+10;
      }
    return continentAge*31536000;
  }
  planetAge(secondsAge, planetDeviation){
    let secs =  secondsAge /  (31536000 * planetDeviation);
    return parseFloat(secs.toFixed(2));
  }

  earth(secondsAge) {
    return this.planetAge(secondsAge, 1);
  }

  mercury(secondsAge) {
     return this.planetAge(secondsAge, .24);
   }

   venus(secondsAge) {
     return this.planetAge(secondsAge, .62);
   }

   mars(secondsAge) {
     return this.planetAge(secondsAge, 1.88);
   }

   jupiter(secondsAge) {
     return this.planetAge(secondsAge, 11.86);
   }
  }

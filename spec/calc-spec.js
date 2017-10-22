import { Calculator } from './../js/calc.js';

describe('Calculator', function() {


// let age;
//
//   beforeEach(function() {
//     let age = new Calculator(new Date("1994-12-25"), new Date("2017-10-22"))
//   });

  it ('should test conversion of age into seconds', function() {
    let age = new Calculator(new Date("1994-12-25"), new Date("2017-10-22"))
    expect(age.checkAgeInSeconds(age.birthday, age.currentDate)).toEqual(720316800)
  });

  it ('should test conversion of age to Mercury', function() {
    let age = new Calculator(new Date("1994-12-25"), new Date("2017-10-22"))
    let seconds = age.checkAgeInSeconds(age.birthday, age.currentDate)
    expect(age.mercury(seconds)).toEqual(95.17)
  });

});

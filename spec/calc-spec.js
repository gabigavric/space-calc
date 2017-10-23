import { Calculator } from './../js/calc.js';

describe('Calculator', function() {


  let calc;

  beforeEach(function() {
      calc = new Calculator(new Date("1994-12-25"), new Date("2017-10-22"));
  });

  it ('should test conversion of age into seconds', function() {
    expect(calc.checkAgeInSeconds(calc.birthday, calc.currentDate)).toEqual(720316800)
  });

  it ('should test conversion of age on Mercury', function() {
    let seconds = calc.checkAgeInSeconds(calc.birthday, calc.currentDate)
    expect(calc.mercury(seconds)).toEqual(95.17)
  });

  it('should test conversion of age on Venus', function() {
    let seconds = calc.checkAgeInSeconds(calc.birthday, calc.currentDate)
    expect(calc.venus(seconds)).toEqual(36.84)
  });

  it('should test conversion of age on Mars', function() {
    let seconds = calc.checkAgeInSeconds(calc.birthday, calc.currentDate)
    expect(calc.mars(seconds)).toEqual(12.15)
  });

  it('should test conversion of age on Jupiter', function() {
    let seconds = calc.checkAgeInSeconds(calc.birthday, calc.currentDate)
    expect(calc.jupiter(seconds)).toEqual(1.93)
  });

});

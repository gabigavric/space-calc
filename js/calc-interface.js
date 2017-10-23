import {Calculator} from './../js/calc.js';
  $(function() {
  $("#calculatorForm").submit(function(event) {
    event.preventDefault();

    let birthday = new Date($('#birthday').val());
    let currentDate = new Date();
    console.info("birthday:" + birthday)
    let continent = $("#continent").val();
    console.info("continent:"+continent);

    let calc = new Calculator(birthday, currentDate, continent);
    let ageSeconds = calc.checkAgeInSeconds();
    let expectedSeconds = calc.getLifeExpectancy();



    $("#output").html('');
    $("#output").append('<li>'
            + 'Earth current age' + calc.earth(ageSeconds)
            +' earth max age:'+calc.earth(expectedSeconds) +' </li>');
    $("#output").append('<li>'
            + 'Mars current age: '+  calc.mars(ageSeconds)
            +' Mars max age:'+calc.mars(expectedSeconds) +' </li>');
    $("#output").append('<li>'
            + 'Venus current age: ' + calc.venus(ageSeconds)
            +' Venus max age:'      +calc.venus(expectedSeconds) +' </li>');
    $("#output").append('<li>'
            + 'Mercury current age: '+ calc.mercury(ageSeconds)
            + ' Mercury max age:'  + calc.mercury(expectedSeconds) + '  </li>');
    $("#output").append('<li>'
            + 'Jupiter: ' + calc.jupiter(ageSeconds)
            + ' Jupiter max age:'  + calc.jupiter(expectedSeconds) + '  </li>');
  });
});

import {Calculator} from './../js/calc.js';
  $(function() {
  $("#calculatorForm").submit(function(event) {
    event.preventDefault();
  
    let birthday = new Date($('#birthday').val());
    let currentDate = new Date();
    let continent = $("#continent").val();

    let age = new Calculator(birthday, currentDate);
    let earthAgeSeconds = age.checkAgeInSeconds();

    let mars = age.mars(earthAgeSeconds);
    let mercury = age.mercury(earthAgeSeconds);
    let venus = age.venus(earthAgeSeconds);
    let jupiter = age.jupiter(earthAgeSeconds);

    $("#output").append('<li>' + "Earth: " + earthAgeSeconds + '<br>');
    $("#output").append('<li>' + "Mercury: " + mars +'<br>');
    $("#output").append('<li>' + "Venus: " + mercury +'<br>');
    $("#output").append('<li>' + "Mars: " + venus +'<br>');
    $("#output").append('<li>' + "Jupiter: " + jupiter +'</li>');
  });
});

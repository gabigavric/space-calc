import {Name} from './../js/age-checker.js';

$(document).ready(function(){
  $('.haiku').submit(function(event){
    event.preventDefault();
    var line1 = $('#line1').val();
    $('#entries').text(line1);
    newHaiku = new Haiku("haiku", line1)
    if (newHaiku.vowelCount() === 17) {
      $('.yeshaiku').show();
    } else {
      $('.nohaiku').show();
    }
  });
});

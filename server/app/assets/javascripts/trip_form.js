$(document).on('turbolinks:load', function() {
  $('#new-trip').on('click', (e) => {
    $('#schedule-display').css('display', 'none');
    $('.form-trip').addClass('animated fadeInRight').css('display', 'block');
  });

  $('.cancel-new-trip').on('click', (e) => {
    e.preventDefault();
    $('.form-trip').css('display', 'none');
    $('#schedule-display').addClass('animated fadeInRight').css('display', 'block');
  });

  $('.submit-trip').on('click', (e) => {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/trips"
    }).done(function(schedules) {
      console.log('saved');
    }).fail(function() {
      console.log('error');
    })
  });
})
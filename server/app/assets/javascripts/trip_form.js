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
      url: "/trips",
      dataType: 'json',
      data: {
        name: $('#name').val(),
        summary: $('#summary').val(),
        kind: $('#kind option:selected').val()
     }
    }).done(function(data) {
      location.reload(true);
    }).fail(function() {
      console.log('error');
    })
  });
})
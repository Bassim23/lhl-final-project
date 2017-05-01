$(document).on('turbolinks:load', function() {
  $('#request-to-join-button').on('click', (e) => {
    $scheduleID = $('#request-to-join-button').data('id');
    $.ajax({
      method: "POST",
      url: "/activities/" + $scheduleID + "/participations"
    }).done(function(schedules) {
      $('#request-to-join-button').attr("disabled", true).text('Pending');
    })
  })
})
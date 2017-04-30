$(document).on('turbolinks:load', function() {
  $('.trip-panel').on("click", function(e) {
    $('.form-trip').css('display', 'none');
    $('#schedule-display').addClass('animated fadeInRight').css('display', 'block');
    $tripID = $(this).data("id");
    $.ajax({
      method: "GET",
      url: "/trips/" + $tripID + "/schedules",
    }).done(function(schedules) {
      renderSchedules(schedules);
      $('#new-schedule').on('click', (e) => {
        $('#trip-display').css('display', 'none');
        $('.form-schedule').addClass('animated fadeIn').css('display', 'block');
        $('.form-schedule-close').on('click', (e) => {
          $('.form-schedule').css('display', 'none');
          $('#trip-display').addClass('animated fadeIn').css('display', 'block');
        });
        $('.cancel-new-schedule').on('click', (e) => {
          e.preventDefault();
          $('.form-schedule').css('display', 'none');
          $('#trip-display').addClass('animated fadeIn').css('display', 'block');
        });

        $('.submit-schedule').on('click', (e) => {
          e.preventDefault();
          $.ajax({
            method: "POST",
            url: "/trips/" + $tripID + "/schedules",
            dataType: 'json',
            data: {
              date: $('#date_').val(),
              destination_name: $('#destination').val()
          }
          }).done(function(data) {
            $('#schedule-display').append(createSchedules(data));

            $('#schedule-display').stop().animate({
              scrollTop: $('#schedule-display')[0].scrollHeight
            }, 800);
          });
        })
      });
    })
  })
})

function createSchedules(schedule) {
  let $schedule = `
    <article class="panel panel-default schedule-panel animated fadeIn" data-id="${schedule.id}" >
        <div class="panel-body">
            <strong>${schedule.destination_name}</strong> @ <strong><time>${schedule.date}</time></strong>
        </div>
    </article>

    `
  let $empty =
    `
      <div>
        <h4>
          This trip has no schedule yet.
        <h4>
      </div>
    `

  if (schedule) {
    return $schedule;
  } else {
    return $empty;
  }
}

function renderSchedules(schedules) {
  $('#schedule-display').empty();
  $('#schedule-display').append(`
    <div class="page-header">
      <h2>My Schedules
        <button id="new-schedule" class="btn btn-primary">Create New</button>
      </h2>
    </div>
    `);
  for (s of schedules) {
    $('#schedule-display').append(createSchedules(s));
    $('.schedule-panel').addClass('animated fadeIn');
  }
}
$(document).on('turbolinks:load', function() {
  $('.trip-panel').on("click", function(e) {
    $tripID = $(this).data("id");
    $.ajax({
      method: "GET",
      url: "/trips/" + $tripID + "/schedules",
    }).done(function(schedules) {
      renderSchedules(schedules);
      $('#new-schedule').on('click', (e) => {
        $('#trip-display').css('display', 'none');
        $('.form-schedule').addClass('animated fadeIn').css('display', 'block');
      });
    })
  });
})

function createSchedules(schedule) {
  let $schedule = `
    <article class="panel panel-default schedule-panel" data-id="${schedule.id}" >
        <div class="panel-body">
            <strong>${schedule.destination}</strong> @ <strong><time>${schedule.date}</time></strong>
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
        <button id="new-schedule" class="btn btn-primary pull-right">Create New</button>
      </h2>
    </div>
    `);
  for (s of schedules) {
    $('#schedule-display').append(createSchedules(s));
    $('.schedule-panel').addClass('animated fadeIn');
  }
}


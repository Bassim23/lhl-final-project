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

  $('.trip-panel').on('mouseleave', function(e) {
    e.stopPropagation();
    $(this).closest('.trip-panel').find('.panel-title-text').attr('contenteditable', 'false');
    $(this).closest('.trip-panel').find('.panel-body').attr('contenteditable', 'false');
    $(this).closest('.trip-panel').find('.panel-footer-kind-selector').attr('disabled');
  })

  $('.trip-edit-icon').on('click', function(e) {
    e.stopPropagation();
    $(this).closest('.trip-panel').find('.panel-title-text').attr('contenteditable', 'true');
    $(this).closest('.trip-panel').find('.panel-body').attr('contenteditable', 'true');
    $(this).closest('.trip-panel').find('.panel-footer-kind-selector').removeAttr('disabled');
    $(this).closest('.trip-panel').find('.panel-title-text').focus();
    //$(this).find('.panel-body').attr('contenteditable', 'true');
    //$('#schedule-display').css('display', 'none');
    //$('.form-trip').addClass('animated fadeInRight').css('display', 'block');
  });

})

function createSchedules(schedule) {
  let $schedule = `
    <article class="panel panel-default schedule-panel" data-id="${schedule.id}" >
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
        <button id="new-schedule" class="btn btn-primary pull-right">Create New</button>
      </h2>
    </div>
    `);
  for (s of schedules) {
    $('#schedule-display').append(createSchedules(s));
    $('.schedule-panel').addClass('animated fadeIn');
  }
}


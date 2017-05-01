$(document).on('turbolinks:load', function() {

  $('.trip-panel').on("click", function(e) {
    $('.form-trip').css('display', 'none');
    $('#schedule-display').addClass('animated fadeInRight').css('display', 'block');
    $tripID = $(this).data("id");
    $tripName = $(this).data("name");
    $.ajax({
      method: "GET",
      url: "/trips/" + $tripID + "/schedules",
    }).done(function(schedules) {
      renderSchedules($tripName, schedules);
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

  });

  $('.trip-panel').on('mouseleave', function(e) {
    e.stopPropagation();
    $(this).find('.panel-title-text').attr('contenteditable', 'false');
    $(this).find('.panel-body').attr('contenteditable', 'false');
    $(this).find('.panel-footer-kind-selector').attr('disabled', 'disabled');
    $.ajax({
      method: "PUT",
      url: "/trips/" + $(this).closest('.trip-panel').data("id"),
      dataType: 'json',
      data: {
        name: $(this).closest('.trip-panel').find('.panel-title-text').text().trim(),
        summary: $(this).closest('.trip-panel').find('.panel-body').text().trim(),
        kind: $('.panel-footer-kind-selector option:selected').text()
      }
    }).done(function(data) {
      console.log('Edit was successful');
    });
  });

  $('.panel-footer-kind-selector').on('click', function (e) {
    e.stopPropagation();
  });

  $('.trip-edit-icon').on('click', function(e) {
    e.stopPropagation();
    $(this).closest('.trip-panel').find('.panel-title-text').attr('contenteditable', 'true');
    $(this).closest('.trip-panel').find('.panel-body').attr('contenteditable', 'true');
    $(this).closest('.trip-panel').find('.panel-footer-kind-selector').removeAttr('disabled');
    $(this).closest('.trip-panel').find('.panel-body').focus();
  });

})

function renderSaveEditTripButton() {
  let $saveEditTripButton = `
    <button class="btn btn-xs btn-primary save-edit-trip">Save</button> 
  `
  return $saveEditTripButton
}

function renderCancelEditTripButton() {
  let $cancelEditTripButton = `
    <button class="btn btn-xs btn-warning cancel-edit-trip">Cancel</button> 
  `
  return $cancelEditTripButton
}

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

function renderSchedules(tripName, schedules) {
  $('#schedule-display').empty();
  $('#schedule-display').append(`
    <div class="page-header">
      <h2>${tripName}
        <button id="new-schedule" class="btn btn-primary">Create New</button>
      </h2>
    </div>
    `);
  for (s of schedules) {
    $('#schedule-display').append(createSchedules(s));
    $('.schedule-panel').addClass('animated fadeIn');
  }
}
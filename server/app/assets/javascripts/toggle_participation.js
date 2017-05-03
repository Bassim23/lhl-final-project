$(document).on('turbolinks:load', function() {
  $('#participant-list-toggle').on('click', function(e){
    $('#participant-list').css({ display: 'block' }).addClass('animated fadeIn');
    $('#activity-list').css({ display: 'none' });
  });

  $('#activity-list-toggle').on('click', function(e){
    $('#participant-list').css({ display: 'none' });
    $('#activity-list').css({ display: 'block' }).addClass('animated fadeIn');
  });

  $('.accept-request').on('click', function(e){
    $id = $(this).data('id');
    $.ajax({
      method: "PUT",
      url: "/participations/" + $id,
      dataType: 'json',
      data: { status: 'Accepted' }
    }).done(function(data) {
      $('#status-' + $id).empty();
      $('#status-' + $id).append('<span class="label label-success">Accepted</span>');
      $('#request-action-' + $id).empty();
    });
  });

  $('.decline-request').on('click', function(e){
    $id = $(this).data('id');
    $.ajax({
      method: "PUT",
      url: "/participations/" + $id,
      dataType: 'json',
      data: { status: 'Declined' }
    }).done(function(data) {
      $('#status-' + $id).empty();
      $('#status-' + $id).append('<span class="label label-danger">Declined</span>');
      $('#request-action-' + $id).empty();
    });
  })
})
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
      console.log(data);
      $('#trip-list').append(
        `
        <article class="panel panel-default trip-panel highlight" data-id="${data.id}">
            <div class="panel-heading icon">
                <i class="fa fa-suitcase"></i>
            </div>
            <div class="panel-heading">
                <h2 class="panel-title"><strong>${data.name}</strong></h2>
            </div>
            <div class="panel-body">
                ${data.summary}
            </div>
            <div class="panel-footer">
                <small>${data.kind}</small>
            </div>
        </article>
        <div class="separator text-muted">
            Created At
            <time>${moment(data.created_at).format('DD MMM YYYY')}</time>
        </div>
        `

      );

      $('#trip-display').stop().animate({
        scrollTop: $('#trip-display')[0].scrollHeight
      }, 800);
      $('.form-trip').css('display', 'none');
      $('#schedule-display').addClass('animated fadeInRight').css('display', 'block');
    }).fail(function() {
      console.log('error');
    })
  });
})
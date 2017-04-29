jQuery(document).ready(function() {
  // commands go here
  $('#custom-search-input input').on("keyup", function(e) {
    if (e.which == 13) {
      let searchInput = $('#custom-search-input input').val()
      $.ajax({
        method: "GET",
        url: "/search/"+searchInput,
      }).done(function(tripResult) {
        console.log(tripResult)
        renderTrips(tripResult)
        $('.featured-container').css({display: "block"});
        $('html,body').animate({
          scrollTop: $(".groupedcontent").offset().top},
        'slow');
      })
    }
  });
})

function createTripsElement(trips, image) {
  let tripId = "/trips/" + trips.trip.id
  let $trip =
    `
      <div class="col-md-4">
        <div class="card">
          <div class="card-block">
            <div class="view overlay hm-white-slight">
              <img src=${image} alt="" />
              <a href={"#"}>
                <div class="mask waves-effect waves-light">
                </div>
              </a>
            </div>
            <div class="card-block">
              <h4 class="card-title">${trips.destination}</h4>
              <div class="card-event">${trips.trip.name}</div>
              <div class="card-host"> Host: ${trips.trip.user.first_name} ${trips.trip.user.last_name} </div>
              <div class="card-date">${trips.date}</div>
              <a href=${tripId} class="btn btn-success">View this trip</a>
            </div>
          </div>
        </div>
      </div>
    `

  let $empty =

    `
      <div>
        <h4>
          There are no trips to this destination available
        <h4>
      </div>
    `

  if (trips.trip) {
    return $trip;
  } else {
    return $empty;
  }
}

const backgroundImage = [
  'https://media.gadventures.com/media-server/cache/da/7b/da7b225caef9847fa4b97b527d2e7867.jpg',
  'https://media.gadventures.com/media-server/cache/a5/7d/a57d03f90d0e6743fe4e4aadc3e8bf55.jpg',
  'https://media.gadventures.com/media-server/cache/59/df/59df833c0368a21e419bfb4cef0d3880.jpg',
  'https://media.gadventures.com/media-server/cache/df/fa/dffa72a642f064c024d3fb2742c3851d.jpg',
  'https://media.gadventures.com/media-server/cache/96/ad/96adb35973e25225b0dea2985f6e3099.jpg',
  'https://media.gadventures.com/media-server/cache/4c/14/4c14da95236171bdb4eb65a456713ef7.jpg',
  'https://media.gadventures.com/media-server/cache/96/ad/96adb35973e25225b0dea2985f6e3099.jpg'
  ];
let index = -1;


function renderTrips(trips) {
  console.log("rendering")
  $('.featured-trips').empty();
  // let n = 0
  // const id = setInterval(() => {
  //   n++;
  //   if (n < trips.length) {
  //     show(trips[n])
  //   } else {
  //     clearInterval(id);
  //   }
  // }, 500)
  for (eachTrip of trips) {
    console.log("appending to list")
    if (index >= backgroundImage.length - 1){
        index = 0;
    } else {
      index ++;
    }
    $('.featured-trips').prepend(createTripsElement(eachTrip, backgroundImage[index])).addClass('animated fadeInUp')
  }
}

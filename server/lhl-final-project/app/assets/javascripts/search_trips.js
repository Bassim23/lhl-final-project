jQuery(document).ready(function() {
  // commands go here
  console.log("im in");
  $('#custom-search-input input').on("keyup", function(e) {
    if (e.which == 13) {
      console.log("it works?")
      let searchInput = $('#custom-search-input input').val()
      console.log(searchInput);
      $.ajax({
        method: "GET",
        url: "/search/"+searchInput,
      }).done(function(tripResult) {
        console.log("ajaxed")
        console.log(tripResult)
        renderTrips(tripResult)
      })
    }
  });
})

function createTripsElement(trips) {
  let $trip =
    `
      <div class="span4" id="item-eilu-2017">
        <div class="triptextcontent  clearfix">
          <div class="card">
            <div class="card-block">
              <div class="view overlay hm-white-slight">
                <img src="https://media.gadventures.com/media-server/cache/a5/7d/a57d03f90d0e6743fe4e4aadc3e8bf55.jpg"img-fluid" alt="" />
                <a href={"#"}>
                  <div class="mask waves-effect waves-light">
                  </div>
                </a>
              </div>
              <div class="card-block">
                <h4 class="card-title">Vancouver, BC</h4>
                <div class="card-event">Balloon Ride</div>
                <div class="card-host"> Host: John Doe </div>
                <div class="card-date">12/23/2017 (3 days) </div>
                <a href={"#"} class="btn btn-small">View this Trip</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  return $trip;
}

function renderTrips(trips) {
  console.log("rendering")
  $('.featured-trips').empty();
  for (eachTrip of trips) {
    console.log("appending to list")
    $('.featured-trips').prepend(createTripsElement());
  }
}


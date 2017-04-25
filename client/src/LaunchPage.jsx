import React, {Component} from 'react';

class Launch extends Component {
  render() {
    return (

  <div>
    <img src={"http://www.mastertvl.com/royalslider/images/group.jpg"} style={{width:"100%"}} />
    <div className="w3-display-bottomleft w3-container w3-hide-small" style={{bottom:"10%"}} style={{opacity:"0.7"}} style= {{width:"70%"}}>
      <h2>
        <div className="app_name col-md-5">
          Looking for Group
        </div>
        <div className="app_slogan col-md-12 col-md-offset-2">
            "We want to connect people who don't have anyone to travel with"
        </div>
      </h2>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div id="location_search">
            <div className="input-group stylish-input-group">
              <input type="text" className="form-control"  placeholder="Enter Travel Destination" ></input>
                <span className="input-group-addon">
                  <button type="submit">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="span4" id="item-eilu-2017">
      <div className="triptextcontent  clearfix">
        <div className="card">
          <div className="view overlay hm-white-slight">
            <img src={"https://media.gadventures.com/media-server/cache/da/7b/da7b225caef9847fa4b97b527d2e7867.jpg"} className="img-fluid" alt="" />
            <a href={"#"}>
              <div className="mask waves-effect waves-light">
              </div>
            </a>
          </div>
          <div className="card-block">
            <h4 className="card-title">Vancouver, BC</h4>
            <div className="card-event">Balloon Ride</div>
            <div className="card-host"> Host: John Doe </div>
            <a href={"#"} className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
    </div>

    <div className="span4" id="item-eilu-2017">
      <div className="triptextcontent  clearfix">
        <div className="card">
          <div className="view overlay hm-white-slight">
            <img src={"https://media.gadventures.com/media-server/cache/a5/7d/a57d03f90d0e6743fe4e4aadc3e8bf55.jpg"} className="img-fluid" alt="" />
            <a href={"#"}>
              <div className="mask waves-effect waves-light">
              </div>
            </a>
          </div>

            <div className="card-block">

              <h4 className="card-title">Cuba, Mexico</h4>

              <p className="card-text">Sightseeing Drive.</p>
              <a href={"#"} className="btn btn-primary">Button</a>
            </div>
        </div>
      </div>
    </div>

    <div className="span4" id="item-eilu-2017">
      <div className="triptextcontent  clearfix">

        <div className="card">


          <div className="view overlay hm-white-slight">
            <img src={"https://media.gadventures.com/media-server/cache/59/df/59df833c0368a21e419bfb4cef0d3880.jpg"} className="img-fluid" alt="" />
            <a href={"#"}>
              <div className="mask waves-effect waves-light">
              </div>
            </a>
          </div>

            <div className="card-block">

              <h4 className="card-title">Loire Castle, France</h4>

              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <a href={"#"} className="btn btn-primary">Button</a>
            </div>
        </div>
      </div>
    </div>

    <div className="span4" id="item-eilu-2017">
      <div className="triptextcontent  clearfix">

        <div className="card">


          <div className="view overlay hm-white-slight">
            <img src={"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg"} className="img-fluid" alt="" />
            <a href={"#"}>
              <div className="mask waves-effect waves-light">
              </div>
            </a>
          </div>

            <div className="card-block">

              <h4 className="card-title">Card title</h4>

              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <a href={"#"} className="btn btn-primary">Button</a>
            </div>
        </div>
      </div>
    </div>

  </div>

    // <div id='content'>
    //   <section className="groupedcontent container" id="featured-tours-from-g-homepage-canada">
    //     <header>
    //       <h2>
    //         <a href="/search/">Featured Trips</a>
    //       </h2>
    //     </header>
    //     <div className="text">
    //       <p className="text-center">Stoke your wanderlust with these handpicked itineraries from our various hosts. Connecting those who dont have anyone to travel with. So, where to next?
    //       </p>
    //     </div>
    //     <div className="items">
    //       <div className="groupedcontent " id="featured-tours-canada">
    //         <div className="">
    //           <div className="row-fluid">
    //             <div className="span4" id="item-dtam-2017">
    //               <div className="triptextcontent  clearfix">
    //                 <img src="https://media.gadventures.com/media-server/cache/da/7b/da7b225caef9847fa4b97b527d2e7867.jpg" className="responsive" alt="" data-src-small="https://media.gadventures.com/media-server/cache/da/7b/da7b225caef9847fa4b97b527d2e7867.jpg" data-src-medium="https://media.gadventures.com/media-server/cache/45/25/452508b88f786d261d244c17b920c442.jpg" data-src-xlarge="https://media.gadventures.com/media-server/cache/09/7d/097d99fe9db51488c6353e3fa768c9af.jpg" data-src-large="https://media.gadventures.com/media-server/cache/ee/f7/eef7f92cbb3c2fc4a4f41b6d04a1069b.jpg">
    //                 <div className="t-info">
    //                   <h4>
    //                     <div>
    //                       Vancouver, BC
    //                     </div>
    //                     <div>
    //                       Balloon Ride
    //                     </div>
    //                   </h4>
    //                   <div className="t-details"><div className="price-info featured-price">
    //                     <span className="from">
    //                       Host:
    //                     </span>
    //                     <span className="price">
    //                       John Doe   ,
    //                       <sup className="currency">
    //                             (Profile Pic)
    //                       </sup>
    //                     </span>
    //                   </div>
    //                   <span className="t-duration">
    //                     12/23/2017 (3 days)
    //                   </span>&nbsp;
    //                   <span className="t-start-finish">
    //                     Hong Kong to Vancouver
    //                   </span>
    //                 </div>
    //                 <a href="/trips/serengeti-migration-safari/DTAM/" className="btn btn-small">
    //                   View this trip
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>




    );
  }
}
export default Launch;
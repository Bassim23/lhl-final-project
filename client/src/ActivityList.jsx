import React, {Component} from 'react';
import Place from './Place.jsx';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import axios from 'axios';

// const API_KEY = 'AIzaSyC3yCuJtptjR5ToKEdsPqHvPnlQXcLMTRk';
const API_KEY = 'AIzaSyA7GEO6ZSaCShhm7K1Jg5PG-KtUA3StVpQ'; // David's

class ActivityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      places: []
    };
    this.onChange = (address) => this.setState({ address });
    this.loadData = this.loadData.bind(this);
  }

  loadData(address) {
    address = address.split(' ').join('');
    const GOOGLE_PLACE_URL = `https://crossorigin.me/https://maps.googleapis.com/maps/api/place/textsearch/json?`;
    const QUERY = `query=poi+in+${address}`;

    const COMPLETE_URL = `${GOOGLE_PLACE_URL}${QUERY}&key=${API_KEY}`

    let placeList = [];

    $.ajax({
        type: "GET",
        url: COMPLETE_URL,
        async: false,
        success : function(response) {
          response.results.forEach((e) => {
            let place = {};
            place.id = e.id;
            place.rating = e.rating;
            place.name = e.name;
            place.types = e.types;
            place.icon = e.icon;
            place.photos = e.photos;
            placeList.push(place);
          })
        }
    });
    console.log('placeList ', placeList);
    this.setState({ places: placeList });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    geocodeByAddress(this.state.address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err) };
      console.log('Address ', this.state.address);
      this.loadData(this.state.address);
    });
  }

  componentDidUpdate() {
    $('#external-events .fc-event').each(function () {
      $(this).data('event', {
        title: $.trim($(this).text()),
        stick: true
      });

      $(this).draggable({
        zIndex: 999, revert: true, // will cause the event to go back to its
        revertDuration: 0 //  original position after the drag
      });

    });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      onBlur: () => {
        this.setState({ address: this.state.address })
      },
      placeholder: 'Search Places...',
      autoFocus: true
    }

    const cssClasses = {
      root: 'form-group',
      input: 'searchPlace',
      autocompleteContainer: 'autocomplete-container'
    }

    return (
      <div id="item-list" className="col-md-8 ">
        <form onBlur={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses} />
        </form>
        <ul id='external-events' className="event-list">
          <h1>Places</h1>
          {this.state.places.map((e) => { return <Place key={e.id} place={e}/> })}
        </ul>
      </div>
    );
  }
}
export default ActivityList;

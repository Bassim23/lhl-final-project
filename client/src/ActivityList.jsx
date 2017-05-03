import React, {Component} from 'react';
import Place from './Place.jsx';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { DropdownButton, MenuItem } from 'react-bootstrap';


const API_KEY = 'AIzaSyC3yCuJtptjR5ToKEdsPqHvPnlQXcLMTRk';
// const API_KEY = 'AIzaSyA7GEO6ZSaCShhm7K1Jg5PG-KtUA3StVpQ'; // David's
// const API_KEY = 'AIzaSyBdWUYZB5naeCvhryosoTLnqATSH0NkR9c'; // Ben's
// const API_KEY = 'AIzaSyDGzXs4DJ0MwXv8WYsAGNS-xBoOLNIo91U'; // Ben's second
// const API_KEY = 'AIzaSyCSTQQCsTp3LuWHmPaZYWDk_LxgkHcjsX4'; // Ben's third

const backgroundColor = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E'];
let index = -1;

class ActivityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      address: '',
      places: []
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.onChange = (address) => this.setState({ address });
    this.loadData = this.loadData.bind(this);
  }

  loadData(address, category) {
    address = address.split(' ').join('');
    const GOOGLE_PLACE_URL = `https://crossorigin.me/https://maps.googleapis.com/maps/api/place/textsearch/json?`;
    const QUERY = `query=${category}+in+${address}`;

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
    this.setState({ places: placeList });
  }

  handleCategory = (event) => {
    this.setState({ category: event });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.address){
      geocodeByAddress(this.state.address,  (err, latLng) => {
        if (err) { console.log('Oh no!', err) };
        this.loadData(this.state.address, this.state.category);
      });
    } else {
      console.log('no place');
    }
  }

  componentDidUpdate() {
    $('#external-events .fc-event').each(function () {
      $(this).data('event', {
        title: $.trim($(this).text()),
        backgroundColor: $(this).data("color"),
        google_id: $(this).data("id"),
        stick: true
      });

      $(this).draggable({
        zIndex: 999,
        revert: true, // will cause the event to go back to its
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
      <div id="item-list" className="col-md-8 right">
        <div className="row">
          <div className="col-md-2">
            <DropdownButton title={this.state.category} id='dropdown-basic' className="dropdown-google btn btn-warning" onSelect={this.handleCategory}>
              <MenuItem eventKey="amusement_park">Amusement Park</MenuItem>
              <MenuItem eventKey="aquarium">Aquarium</MenuItem>
              <MenuItem eventKey="art_gallery">Art Gallery</MenuItem>
              <MenuItem eventKey="casino">Casino</MenuItem>
              <MenuItem eventKey="park">Park</MenuItem>
              <MenuItem eventKey="parking">Parking</MenuItem>
              <MenuItem eventKey="museum">Museum</MenuItem>
              <MenuItem eventKey="department_store">Department Store</MenuItem>
              <MenuItem eventKey="shopping_mall">Shopping Mall</MenuItem>
              <MenuItem eventKey="convenience_store">Convenience Store</MenuItem>
              <MenuItem eventKey="restaurant">Restaurant</MenuItem>
              <MenuItem eventKey="zoo">Zoo</MenuItem>
            </DropdownButton>
          </div>
          <div className="col-md-8">
            <form onBlur={this.handleFormSubmit}>
              <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses} />
            </form>
          </div>
        </div>

        <ul id='external-events' className="event-list">
          <h1>Places</h1>
          {this.state.places.map((e) => {
            if (index >= backgroundColor.length - 1){
              index = 0;
            } else {
              index++;
            }
            return <Place key={e.id} place={e} color={ backgroundColor[index] }/> })
          }
        </ul>
      </div>
    );
  }
}
export default ActivityList;

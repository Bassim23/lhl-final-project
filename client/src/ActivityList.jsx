import React, {Component} from 'react';
import Place from './Place.jsx';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

const API_KEY = 'AIzaSyC3yCuJtptjR5ToKEdsPqHvPnlQXcLMTRk';

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
    const GOOGLE_PLACE_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${address}&key=AIzaSyCH4bIlrAPDcVFlr3iKeYP0q0vmxIcrpaA`;

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("GET", GOOGLE_PLACE_URL, true); // true for asynchronous
    xmlHttp.send(null);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    geocodeByAddress(this.state.address,  (err, latLng) => {
      if (err) { console.log('Oh no!', err) };

      console.log(`Yay! Got latitude and longitude for ${this.state.address}`, latLng);
      this.loadData(this.state.address);
    });
  }

  componentDidMount() {
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
        <div id='external-events'>
          <h1>Places</h1>
        </div>
      </div>
    );
  }
}
export default ActivityList;

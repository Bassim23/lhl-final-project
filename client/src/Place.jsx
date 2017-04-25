import React, {Component} from 'react';

const API_KEY = 'AIzaSyC3yCuJtptjR5ToKEdsPqHvPnlQXcLMTRk';
// const API_KEY = 'AIzaSyA7GEO6ZSaCShhm7K1Jg5PG-KtUA3StVpQ'; // David's
const PLACE_URL = `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=`;

class Place extends Component {
  render() {
    if (this.props.place.photos) {
      return (
        <li className='fc-event'
          data-id={this.props.place.id}
          data-url={PLACE_URL + this.props.place.id}
          data-color={this.props.color}
          style={{ backgroundColor: this.props.color }}
          >
          <img src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + this.props.place.photos[0].photo_reference + "&key=" + API_KEY} />
          <div className="info">
            <h3 className="title">{this.props.place.name}</h3>
          </div>
        </li>
      );
    } else {
      return (
        <li className='fc-event'
          data-id={this.props.place.id}
          data-url={PLACE_URL + this.props.place.id}
          data-color={this.props.color}
          style={{ backgroundColor: this.props.color }}
          >
          <img src={this.props.place.icon} />
          <div className="info">
            <h3 className="title">{this.props.place.name}</h3>
          </div>
        </li>
      );
    }
  }
}
export default Place;

import React, {Component} from 'react';

class Place extends Component {
  render() {
    return (
      <div className='fc-event'>
        <h3 className='name'>{this.props.name}</h3>
        <div className='description'></div>
      </div>
    );
  }
}
export default Place;

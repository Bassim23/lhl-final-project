import React, {Component} from 'react';

class AgendaView extends Component {

  componentDidMount() {
    $('#calendar').fullCalendar({
      height: 'auto',
      defaultView: 'agendaDay',
      allDaySlot: false,
      allDayText: false,
      slotEventOverlap: false,
      defaultDate: '2017-4-21',
      editable: true,
      droppable: true,
      scrollTime: '06:00:00'
    });
  }
  render() {
    return (
      <div id="agendaDay-view" className="col-md-4">
        <div id="calendar"></div>
      </div>
    );
  }
}
export default AgendaView;

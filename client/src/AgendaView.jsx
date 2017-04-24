import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class AgendaView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })

    alert(`${event.title} was dropped onto ${event.start}`);
  }
  render() {
    return (
      <div id="agendaDay-view" className="col-md-4">
        <DragAndDropCalendar
          selectable
          events={this.state.events}
          onEventDrop={this.moveEvent}
          toolbar={false}
          defaultView='day'
          views='day'
          defaultDate={new Date()}
        />
      </div>
    );
  }
}
export default AgendaView;

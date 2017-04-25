import React, {Component} from 'react';
import fullCalendar from 'fullcalendar';
import uuidV1 from 'uuid/v1';

class AgendaView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
    };
  }

  componentDidMount() {
    const { fullCalendar } = this;

    $(fullCalendar).fullCalendar({
      height: 'auto',
      defaultView: 'agendaDay',
      allDaySlot: false,
      allDayText: false,
      defaultDate: '2017-4-21',
      editable: true,
      droppable: true,
      events: this.state.events,
      eventReceive: function(event) {
        event.id = uuidV1();
        console.log(event);
      },
      eventResize: function(event, delta) {
        console.log(event);
        console.log('delta', delta);
      },
      eventDragStop: function( event, jsEvent, ui, view ) {
        console.log(event);
        console.log(jsEvent);
      },
      eventRender: function(event, element, view) {
        element.find(".fc-content").prepend("<i class='fa fa-trash-o closeon'></i>");
       	element.find(".closeon").on('click', function() {
        	$('#calendar').fullCalendar('removeEvents',event._id);
        });
      },
    });
  }

  render() {
    return (
      <div id="agendaDay-view" className="col-md-4">
        <div id="calendar" ref={(calendar) => { this.fullCalendar = calendar; }} />
      </div>
    );
  }
}
export default AgendaView;

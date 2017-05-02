import React, {Component} from 'react';
import fullCalendar from 'fullcalendar';
import uuidV1 from 'uuid/v1';
import moment from 'moment';

class AgendaView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: {},
    };

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const { fullCalendar } = this;

    $(fullCalendar).fullCalendar({
      defaultView: 'agendaDay',
      header: {
        left: 'title',
        right: ''
      },
      height: 'auto',
      timezone: 'local',
      allDaySlot: false,
      allDayText: false,
      defaultDate: '2017-4-24',
      editable: true,
      droppable: true,
      events: this.state.events,
      eventReceive: function(event) {
        event.id = uuidV1();
        this.state.events[event.id] = {
          id: event.id,
          google_id: event.google_id,
          name: event.title,
          start: event.start._d,
          end: moment(event.start._d).add(2, 'hours')._d,
          color: event.backgroundColor
        };
      }.bind(this),
      eventResize: function(event, delta) {
        this.state.events[event.id].end = event.end._d;
      }.bind(this),
      eventDrop: function(event) {
        this.state.events[event.id].start = event.start._d;
        this.state.events[event.id].end = moment(event.start._d).add(2, 'hours')._d;
      }.bind(this),
      eventRender: function(event, element) {
        const self = this;
        element.find(".fc-content").prepend("<i class='fa fa-trash-o closeon'></i>");
       	element.find(".closeon").on('click', function() {
        	$('#calendar').fullCalendar('removeEvents', event._id);
          delete self.state.events[event.id];
          $.ajax({
            url: '/trips/1/schedules/1/activities/' + event.id,
            type: 'DELETE',
            success: function(data) {
            }
          });
        });
      }.bind(this),
    });
  }

  handleSave() {
    const arrayOfEvents = [];
    for (let i in this.state.events){
      arrayOfEvents.push(this.state.events[i]);
    }
    console.log(arrayOfEvents);
    $.ajax({
      url: '/trips/1/schedules/1/activities',
      dataType: 'json',
      type: 'POST',
      data: { events: arrayOfEvents },
      success: function(data) {
      }.bind(this)
    });
  }

  render() {
    return (
      <div id="agendaDay-view" className="col-md-4 left">
        <div id="calendar" ref={(calendar) => { this.fullCalendar = calendar; }} />
        <button className="btn btn-primary schedule-save" onClick={this.handleSave}><i className="fa fa-floppy-o"></i></button>
      </div>
    );
  }
}
export default AgendaView;

import React, {Component} from 'react';
import fullCalendar from 'fullcalendar';
import uuidV1 from 'uuid/v1';
import moment from 'moment';

class AgendaView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      schedule_id: 0,
      events: [],
    };


    this.handleSave = this.handleSave.bind(this);
    this.renderCalendar = this.renderCalendar.bind(this);
  }

  renderCalendar(events){
    const { fullCalendar } = this;

    $(fullCalendar).fullCalendar({
      defaultView: 'agendaDay',
      header: {
        left: 'title',
        right: ''
      },
      height: 'auto',
      timezone: 'local',
      minTime: '06:00:00',
      allDaySlot: false,
      allDayText: false,
      defaultDate: this.state.date,
      editable: true,
      droppable: true,
      events: events,
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
        this.state.events[event.id].start = event.start._d;
        this.state.events[event.id].end = event.end._d;
      }.bind(this),
      eventDrop: function(event) {
        console.log(event);
        this.state.events[event.id].start = event.start._d;
        this.state.events[event.id].end = event.end._d ? event.end._d : moment(event.start._d).add(2, 'hours')._d;
        console.log(this.state.events[event.id]);
      }.bind(this),
      eventRender: function(event, element) {
        const self = this;
        element.find(".fc-content").prepend("<i class='fa fa-trash-o closeon'></i>");
       	element.find(".closeon").on('click', function() {
        	$('#calendar').fullCalendar('removeEvents', event._id);
          delete self.state.events[event.id];
          $.ajax({
            url: '/activities/' + event.id,
            type: 'DELETE',
            success: function(data) {
            }
          });
        });
      }.bind(this),
    });
  }
  componentDidMount() {
    const schedule_id = $('#react-root').data('id');



    $.ajax({
      url: '/schedules/' + schedule_id + '.json',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        this.setState({ title: data.destination_name });
        this.setState({ date: data.date });
        $.ajax({
          url: '/activities/' + schedule_id,
          dataType: 'json',
          type: 'GET',
          success: function(data) {
            let eventList = [];
            
            data.forEach((o) =>{
              this.state.events[o.uuid] = {
                id: o.uuid,
                name: event.title,
                start: this.state.date  + ' ' + moment(o.start_time).format("HH:mm:ss"),
                end: this.state.date  + ' ' + moment(o.end_time).format("HH:mm:ss")
              };
              
              let eventObject = {
                title: o.name,
                id: o.uuid,
                start: this.state.date  + ' ' + moment(o.start_time).format("HH:mm:ss"),
                end: this.state.date  + ' ' + moment(o.end_time).format("HH:mm:ss")
              };
              eventList.push(eventObject);
            });
            
            this.setState({ schedule_id });
            this.renderCalendar(eventList);
          }.bind(this)
        });
        
      }.bind(this)
    });

  }

  handleSave() {
    const arrayOfEvents = [];
    for (let i in this.state.events){
      arrayOfEvents.push(this.state.events[i]);
    }
    $.ajax({
      url: '/schedules/' + this.state.schedule_id + '/activities',
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
          <div className="schedule-save">
            <a href={"/schedules/" + this.state.schedule_id }><button className="btn btn-warning"><i className="fa fa-arrow-left"></i></button></a>
            <button className="btn btn-primary" onClick={this.handleSave}><i className="fa fa-floppy-o"></i></button>

          </div>
      </div>
    );
  }
}
export default AgendaView;

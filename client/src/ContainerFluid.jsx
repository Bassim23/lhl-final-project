import React, {Component} from 'react';
import AgendaView from './AgendaView.jsx';
import ActivityList from './ActivityList.jsx';

class ContainerFluid extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AgendaView/>
          <ActivityList/>
        </div>
      </div>
    );
  }
}
export default ContainerFluid;

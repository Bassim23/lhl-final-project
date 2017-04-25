import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ContainerFluid from './ContainerFluid.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <ContainerFluid/>
      </div>
    );
  }
}
export default App;
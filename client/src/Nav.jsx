import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="menu" id="theMenu">
        <div className="menu-wrap">
            <h1 className="logo"><a href="index.html#home">LINK</a></h1>
            <i className="fa fa-arrow-right menu-close"></i>
            <a className="#">Home</a>
            <a className="#">Services</a>
            <a className="#">Portfolio</a>
            <a className="#">About</a>
            <a className="#">Contact</a>
            <a className="#"><i className="fa fa-facebook"></i></a>
            <a className="#"><i className="fa fa-twitter"></i></a>
            <a className="#"><i className="fa fa-dribbble"></i></a>
            <a className="#"><i className="fa fa-envelope"></i></a>
        </div>
        <div id="menuToggle"><i className="fa fa-bars"></i></div>
      </nav>
    );
  }
}
export default Nav;

import React, {Component} from 'react';
import styles from './Nav.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Nav extends Component {

  constructor(props){
    super(props);
    this.routeLinkClicked = this.routeLinkClicked.bind(this)
  }

  linkClicked() {
    console.log('linkClicked in nav.js');
    this.props.toggleAppNavDelayed();
  }

  routeLinkClicked() {
    this.props.toggleAppNavRoute();
  }

  render() {
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <nav id="main-nav" className={theClasses}>
      <ul className="menu">
        <li><Link to='/about' onClick={this.routeLinkClicked}>About</Link></li>
        <li><Link to='/work' onClick={this.routeLinkClicked}>Work</Link></li>
        <li><Link to='/blog' onClick={this.routeLinkClicked}>Blog</Link></li>
      </ul>
    </nav>;
  }

}

export default Nav;


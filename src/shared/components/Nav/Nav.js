import React, {Component} from 'react';
import styles from './Nav.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Nav extends Component {

  linkClicked() {
    this.props.toggleNav();
  }

  render() {
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <nav id="main-nav" className={theClasses}>
      <ul className="menu">
        <li><Link to='/about' onClick={this.linkClicked}>About</Link></li>
        <li><Link to='/work' onClick={this.linkClicked}>Work</Link></li>
        <li><Link to='/blog' onClick={this.linkClicked}>Blog</Link></li>
      </ul>
    </nav>;
  }

}

export default Nav;


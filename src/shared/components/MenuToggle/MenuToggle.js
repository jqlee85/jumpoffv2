import React, {Component} from 'react'
import styles from './MenuToggle.css';
import {connect} from 'react-redux';

class MenuToggle extends Component {

  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.props.toggleNav();
  }

  render() {
    let theClasses = 'menu-toggle';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <a href="#" className={theClasses} id="nav-icon" onClick={this.toggleNav}>
      <span></span>
      <span></span>
      <span></span>
      <p>MENU</p>
    </a>
  }
}


export default MenuToggle;
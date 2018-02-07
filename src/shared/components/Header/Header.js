import React, {Component} from 'react'
import styles from './Header.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {

  linkClicked() {
    this.props.toggleNav();
  }

  render(){
    return <header id="header">
      <Link className="site-title" to='/' onClick={this.linkClicked}><h1>JumpOff</h1></Link>
      <MenuToggle menuToggled={this.props.menuToggled} toggleNav={this.props.toggleNav}/>
    </header>
  }

}

export default Header;
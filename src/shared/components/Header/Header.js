import React, {Component} from 'react'
import styles from './Header.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends Component {

  constructor(props){
    super(props);
    this.linkClicked = this.linkClicked.bind(this)
    this.titleLinkClicked = this.titleLinkClicked.bind(this)
  }

  titleLinkClicked() {
    if (this.props.menuToggled) {
      this.props.toggleNav();  
    } 
  }

  linkClicked() {
    this.props.toggleNav();
  }

  render(){
    return <header id="header">
      <Link className="site-title" to='/' onClick={this.titleLinkClicked}><Logo mainColor="white"/><h1>JumpOff</h1></Link>
      <MenuToggle menuToggled={this.props.menuToggled} toggleNav={this.linkClicked}/>
    </header>
  }

}

// Application State
const mapStateToProps = (state) => {
  return {
    blog: state.blog,
    app: state.app,
    user: state.user
  }
}

export default connect(mapStateToProps)(Header);
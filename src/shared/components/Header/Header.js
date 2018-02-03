import React, {Component} from 'react'
import styles from './Header.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleNav} from '../../actions/appActions';

class Header extends Component {

  linkClicked() {
    this.props.toggleNav();
  }

  render(){
    return <header id="header">
      <Link className="site-title" to='/' onClick={this.linkClicked}><h1>JumpOff</h1></Link>
      <MenuToggle menuToggled={this.props.menuToggled} />
    </header>
  }

}

// Application State
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: () => {
      dispatch(toggleNav());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
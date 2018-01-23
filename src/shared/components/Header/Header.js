import React, {Component} from 'react'
import styles from './Header.css';
import MenuToggle from '../MenuToggle/MenuToggle';
import { Link } from 'react-router-dom';

class Header extends Component {



  render(){
    return <header id="header">
      <Link className="site-title" to='/'><h1>JumpOff</h1></Link>
      <MenuToggle menuToggled={this.props.menuToggled} />
    </header>
  }

}

export default Header

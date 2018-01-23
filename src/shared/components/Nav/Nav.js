import React, {Component} from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';


class Nav extends Component {

  render() {
    
    let list = null;
    if (this.props.menuToggled) {
      list = <ul className="menu">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      </ul>;
    }
    
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <nav id="main-nav" className={theClasses}>
      {list}
    </nav>;
  }

}

export default Nav

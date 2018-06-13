import React, {Component} from 'react'
import styles from './LogoTitle.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


class LogoTitle extends Component {

  render(){
    return <div className="jo-logo-title">  
      <Logo mainColor="white"/>
      <h3>JUMP<br/>OFF</h3>
    </div>
  }

}

export default LogoTitle

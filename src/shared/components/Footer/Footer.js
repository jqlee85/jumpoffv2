import React, {Component} from 'react'
import styles from './Footer.css';
import { Link } from 'react-router-dom';
import LogoTitle from '../LogoTitle/LogoTitle';
import ContactInfo from '../ContactInfo/ContactInfo';

class Footer extends Component {

  render(){
    return <footer id="footer">
      <ContactInfo />
      <div class="jo-logo-title-section">  
        <LogoTitle />
      </div>
    </footer>
  }

}

export default Footer

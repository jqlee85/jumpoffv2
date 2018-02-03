import React, {Component} from 'react'
import styles from './ContactInfo.css';
import { Link } from 'react-router-dom';

class ContactInfo extends Component {

  render(){
    return <div className="jo-contact-info">  
      <h3>Contact</h3>
      <address>Santiago, CL</address>
      <address>Chicago, IL</address>
      <a href="mailto:jesse@jumpoff.io">jesse@jumpoff.io</a>
    </div>
  }

}

export default ContactInfo

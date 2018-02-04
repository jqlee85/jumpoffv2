import React, {Component} from 'react'
import styles from './Footer.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import LogoTitle from '../LogoTitle/LogoTitle';
import ContactInfo from '../ContactInfo/ContactInfo';
import MapContainer from '../MapContainer/MapContainer';

class Footer extends Component {

  render(){
    return <footer id="footer">
      <div className="jo-map-wrapper">
        <LazyLoad height={200}>
          <MapContainer />
        </LazyLoad>
      </div>
      <ContactInfo />
      <div className="jo-logo-title-section">  
        <LogoTitle />
      </div>
    </footer>
  }

}

export default Footer

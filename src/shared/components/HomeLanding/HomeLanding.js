import React, {Component} from 'react';
import styles from './HomeLanding.css';
import Logo from '../Logo/Logo';

class HomeLanding extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-landing">
      
      <div className="home-section-content"></div>
      <div className="home-landing-content">
        <Logo mainColor="black"/>
        <h2 className="jo-home-title">We build modern web experiences</h2>
        <p>
        </p>
      </div>
    </section>
  }

}

export default HomeLanding

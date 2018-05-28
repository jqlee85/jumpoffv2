import React, {Component} from 'react';
import styles from './HomeLanding.css';
import Logo from '../Logo/Logo';
import DownArrow from '../DownArrow/DownArrow';

class HomeLanding extends Component {
  
  constructor(props){
    super(props);
  }
  
  goToSectionTwo() {
    document.fpTurnTo(2);
  }

  render(){
    
    let onClick = this.props.onClick;
    
    return <section className="jo-section home-landing">
      
      <div className="home-section-content"></div>
      <div className="home-landing-content">
        <Logo mainColor="black"/>
        <h2 className="jo-home-title">We build modern web experiences</h2>
        <p>
        </p>
        <DownArrow size="60" href="#" onClick={this.goToSectionTwo}/>
      </div>
    </section>
  }

}

export default HomeLanding

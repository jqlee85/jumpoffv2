import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';
import ReactLogo from '../ReactLogo/ReactLogo';

class HomeSectionTwo extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    
    return <section className="jo-section home-section" id="home-section-two">
      <div className="home-section-content">
          <h2>React and Node Development</h2>
          <p></p>
          <a>Learn More</a>

          
      </div>
      <div className="home-section-graphics">
        <ReactLogo rotating={true} color="#191919"/>
      </div>
    </section>
  }

}

export default HomeSectionTwo;

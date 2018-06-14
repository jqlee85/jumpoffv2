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
          <h2>React + Node</h2>
          <p>Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so we build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.</p>
          <a>Learn More</a>
      </div>
      <div className="home-section-graphics">
        <ReactLogo rotating={true} color="#191919"/>
      </div>
    </section>
  }

}

export default HomeSectionTwo;

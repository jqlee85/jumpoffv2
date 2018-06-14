import React, {Component} from 'react';
import styles from './HomeSectionThree.css';
import WordPressLogo from '../WordPressLogo/WordPressLogo';

class HomeSectionThree extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    
    return <section className="jo-section home-section" id="home-section-three">
      <div className="home-section-graphics">
        <WordPressLogo color="#191919"/>
      </div>
      <div className="home-section-content">
          <h2>WordPress Development</h2>
          <p></p>
          <a>Learn More</a>
      </div>
    </section>
  }

}

export default HomeSectionThree;

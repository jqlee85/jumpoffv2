import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';

class HomeSectionTwo extends Component {
  
  componentDidMount(){
 
 
  }

  
  
  render(){
    return <section className="jo-section jo-home-section home-section-two" id={'home-section_'+this.props.sectionNumber}>
      <div className="jo-home-section-content blue">
        <h1>Node + React</h1>
        <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
      </div>
    </section>
  }

}

export default HomeSectionTwo

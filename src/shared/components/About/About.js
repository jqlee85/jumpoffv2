import React, {Component} from 'react';
import styles from './About.css';

class About extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="about jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <h1>What is JumpOff?</h1>
            <p>Jumpoff.io is a collection of projects exploring the intersection of nature, art and technology. It was started on the island of Maui in 2015 by Jesse Lee.</p>
            <p>Jesse got his start in the interdisciplinary world of architectural design. But shortly after earning his degree he turned his attention from designing buildings to designing for the web while working at a startup in Chicago. There he honed his design sense and learned from a team of insanely talented photographers, designers, and artists. Over the years, he’s worked as a designer, photographer and programmer. He also spent a summer in the desert building sustainable Earthship houses out of dirt, used tires and beer bottles.</p>
            <p>Eventually a love of nature and yearning for adventure pulled him away from the city and to the ocean. Drawing inspiration from nature, art, and technology, Jumpoff continues to explore and create art that embraces all three.</p>
        </div>
      </div>
    </div>
  }

}

export default About

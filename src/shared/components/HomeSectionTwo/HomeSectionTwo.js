import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';

class HomeSectionTwo extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="jo-section home-section-two">
      <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
    </div>
  }

}

export default HomeSectionTwo

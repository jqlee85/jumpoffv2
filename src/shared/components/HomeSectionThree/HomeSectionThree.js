import React, {Component} from 'react';
import styles from './HomeSectionThree.css';

class HomeSectionThree extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section jo-home-section">
      <div className="jo-home-section-content red">
        <h1>WordPress</h1>
        <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
      </div>
    </section>
  }

}

export default HomeSectionThree

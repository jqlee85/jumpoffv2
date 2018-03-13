import React, {Component} from 'react';
import styles from './HomeSectionFour.css';

class HomeSectionFour extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-section-four">
      <div className="jo-row">
        <div className="jo-content">
          <h1>Digital Art</h1>
          <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
        </div>
      </div>
    </section>
  }

}

export default HomeSectionFour

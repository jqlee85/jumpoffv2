import React, {Component} from 'react';
import styles from './HomeSectionFive.css';

class HomeSectionFive extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-section-five">
      <div className="jo-row">
        <div className="jo-content">
          <h1>Projects</h1>
          <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
        </div>
      </div>
    </section>
  }

}

export default HomeSectionFive

import React, {Component} from 'react';
import styles from './HomeSectionThree.css';

class HomeSectionThree extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-section-three">
      <div className="jo-row">
        <div className="jo-content">
          <h1>JavaScript</h1>
          <p>Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor Lorem ipsum sit dolor </p>
        </div>
      </div>
    </section>
  }

}

export default HomeSectionThree

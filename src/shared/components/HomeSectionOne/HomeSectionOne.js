import React, {Component} from 'react';
import styles from './HomeSectionOne.css';

class HomeSectionOne extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-section-one">
      <h1>JumpOff</h1>
  			<p>Web Design</p>
        <p>Web Development</p>
        <p>Digital Art</p>
    </section>
  }

}

export default HomeSectionOne

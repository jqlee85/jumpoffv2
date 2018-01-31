import React, {Component} from 'react';
import styles from './HomeSectionOne.css';

class HomeSectionOne extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <section className="jo-section home-section-one">
      <div className="jo-section-half first">
        <div className="jo-logo-featured-wrapper">
          <div className="jo-logo-featured">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
              width="100%"
              height="100%"
              x="0"
              y="0"
              viewBox="0 0 200 200"
            >
              <path 
                
                d="M 0 25 L 175 25 L 175 175 L 25 175 L 25 100"
                fill="none"
                stroke="black"
                strokeWidth="50"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="jo-section-half last">
        <h1>JumpOff</h1>
        <p>Web Design</p>
        <p>Web Development</p>
        <p>Digital Art</p>
      </div>
    </section>
  }

}

export default HomeSectionOne

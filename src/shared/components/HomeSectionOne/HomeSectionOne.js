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
              viewBox="0 0 250 250"
            >
              <defs>
                <linearGradient id="jo-gradient" x1="0%" y1="0%" x2="75%" y2="100%">
                  <stop offset="0%"   stop-color="#f0ba45"/>
                  <stop offset="25%"   stop-color="#f89c44"/>
                  <stop offset="75%" stop-color="#ef6085"/>
                  <stop offset="100%" stop-color="#cd5fa1"/>
                </linearGradient>
              </defs>
              <path 
                d="M 25 50 L 200 50 L 200 200 L 50 200 L 50 125"
                fill="none"
                stroke="url(#jo-gradient)"
                strokeWidth="50"
              />
              <path 
                d="M 12.5 62.5 L 187.5 62.5 L 187.5 212.5 L 37.5 212.5 L 37.5 137.5"
                fill="none"
                stroke="white"
                strokeWidth="50"
              />
              <path 
                d="M 0 75 L 175 75 L 175 225 L 25 225 L 25 150"
                fill="none"
                stroke="black"
                strokeWidth="50"
              />
              
            </svg>
          </div>
        </div>
      </div>
      <div className="jo-section-half last">
        <div className="jo-home-title-wrapper">
          <h1 className="jo-home-title">Jump<br/>Off</h1>
          <p className="jo-home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  }

}

export default HomeSectionOne

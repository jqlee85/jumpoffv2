import React, {Component} from 'react'
import styles from './Logo.css';
import { Link } from 'react-router-dom';


class Logo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    
    let mainColor = this.props.mainColor == 'white' ? 'white' : 'black';
    let secondaryColor = this.props.mainColor == 'white' ? 'black' : 'white';

    return <div className="jo-logo-wrapper">
      <div className="jo-logo">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 250 250"
        >
          <defs>
            <linearGradient id="jo-gradient" x1="0%" y1="0%" x2="75%" y2="100%">
              <stop offset="0%"   stopColor="#f0ba45"/>
              <stop offset="25%"   stopColor="#f89c44"/>
              <stop offset="75%" stopColor="#ef6085"/>
              <stop offset="100%" stopColor="#cd5fa1"/>
            </linearGradient>
          </defs>
          <path 
            d="M 25 50 L 200 50 L 200 200 L 50 200 L 50 125"
            fill="none"
            stroke="url(#jo-gradient)"
            strokeWidth="50"
          />
          {/* <path 
            d="M 12.5 62.5 L 187.5 62.5 L 187.5 212.5 L 37.5 212.5 L 37.5 137.5"
            fill="none"
            stroke={secondaryColor}
            strokeWidth="50"
          />
          <path 
            d="M 0 75 L 175 75 L 175 225 L 25 225 L 25 150"
            fill="none"
            stroke={mainColor}
            strokeWidth="50"
          /> */}
        </svg>
      </div>
    </div>
  }

}

export default Logo


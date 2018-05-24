import React, {Component} from 'react';
import styles from './DownArrow.css';

class DownArrow extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount = () => {

  }

  render(){
    
    let size = this.props.size || 1000;
    let style = {
      width: size,
      height: size
    }
    let color = this.props.color || 'black';
    let hoverColor = this.props.hoverColor || 'white';

    return <a href="">
      <svg className="jo-down-arrow" style={style} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
        <g>
          <circle cx="500" cy="500" r="480" stroke={color} stroke-width="40" fill="none" />
          <path stroke={color} stroke-width="40" fill="transparent" d="M300 400 L500 620 L700 400"></path>
        </g>
      </svg>
    </a>;
  }
}

export default DownArrow;

import React, {Component} from 'react';
import styles from './Home.css';

class Home extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="home">
      <h1>JumpOff</h1>
  			<p>Web Design</p>
        <p>Web Development</p>
        <p>Digital Art</p>
    </div>
  }

}

export default Home

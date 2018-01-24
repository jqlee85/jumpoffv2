import React, {Component} from 'react';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import styles from './Home.css';

class Home extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="home">
      <HomeSectionOne />
      <HomeSectionTwo />
    </div>
  }

}

export default Home

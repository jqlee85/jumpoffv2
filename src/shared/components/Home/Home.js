import React, {Component} from 'react';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour';
import HomeSectionFive from '../HomeSectionFive/HomeSectionFive';
import styles from './Home.css';

class Home extends Component {

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render(){
    return <div id="home" className="home">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </div>
  }

}

export default Home

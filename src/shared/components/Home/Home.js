import React, {Component} from 'react';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import styles from './Home.css';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clearClass: 'app-menu-dark'
    }
  }

  componentDidMount(){
    this.initializeMenuBar();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  initializeMenuBar(){
    let clearClass = this.state.clearClass;
    let isClear = document.getElementById('App').classList.contains(clearClass);
    if ( !isClear ) {
      document.getElementById('App').classList.add(clearClass);
      isClear = true;
    }
    setTimeout(function(){
      let yPos = document.documentElement.scrollTop;
      if ( yPos >= 60 && !isClear ) {
        document.getElementById('App').classList.remove(clearClass);
      } else if ( yPos < 60 && isClear ) {
        document.getElementById('App').classList.add(clearClass);
      } 
    },500);
  }
  
  render(){
    return <div id="home" className="home">
      <HomeSectionOne />
      <HomeSectionTwo />
    </div>
  }

}

export default Home

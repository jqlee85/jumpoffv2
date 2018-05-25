import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSection from '../HomeSection/HomeSection';
import styles from './Home.css';
import { Scroller, Section } from 'react-fully-scrolled';

let sectionData = [
  { 
    number: 1,
    color: 'none',
    title: 'Node + React',
    content: 'Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'node-react-apps',
    link: ''
  },
  { 
    number: 2,
    color: '#C33847',
    title: 'Node + React',
    content: 'Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'node-react-apps',
    link: ''
  },
  { 
    number: 3,
    color: '#487CEF',
    title: 'WordPress Development',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    backgroundImage: false,
    link: ''
  },
  { 
    number: 4,
    color: '#6DC853',
    title: 'Digital Art',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    backgroundImage: false,
    link: ''
  }
];

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    document.ontouchmove = function(ev) {
      ev.preventDefault();
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    document.ontouchmove = function(ev) {}
  }
  
  onBeforeScroll = (from,to) => {
    // this.props.updateCurrentSection(to);
    // setTimeout(function(to) { this.props.updateCurrentSection(to); }.bind(this), 100);
    console.log(sectionData);
    let backgroundColor = sectionData[to - 1].color || 'none';
    let backgroundColorStyle = '.home-section-content{ background-color:'+backgroundColor+';}';
    setTimeout(function(to) {  document.getElementById('home-section-content-style').innerHTML=backgroundColorStyle; }.bind(this), 100);

  }

  

  onAfterScroll = (page) => {
  }
  
  render(){
    
    console.log(this.props);

    return <div id="home" className="home">      
      <style id="home-section-content-style"></style>
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {this.onBeforeScroll(from,to)}}
        onAfterScroll={(page) => {this.onAfterScroll(page)}}
        isEnabled={true}
        swipeSensitivity={300}
        transDuration={1}
      >  
        { 
          sectionData.map(function(section, index){
            if (section.number === 1) {
              return <Section><HomeLanding/></Section>;
            } else {
              return <Section><HomeSection sectionNumber={section.number} sectionData={section}/></Section>;
            }
          })
        }
      </Scroller>
    </div>
  }

}

export default Home;
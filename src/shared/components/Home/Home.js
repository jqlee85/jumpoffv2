import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSection from '../HomeSection/HomeSection';
import styles from './Home.css';
import { Scroller, Section } from 'react-fully-scrolled';

let sectionData = [
  { 
    number: 1,
  },
  { 
    number: 2,
    color: '#c12a3a',
    title: 'Node + React',
    content: 'Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'node-react-apps',
    backgroundImage: '/images/home-landing-bg.jpg',
    link: ''
  },
  { 
    number: 3,
    color: '#376ee5',
    title: 'WordPress Development',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    backgroundImage: 'false',
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
  },
  { 
    number: 5,
    color: '#f2ad37',
    title: 'Node + React',
    content: 'Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'node-react-apps',
    link: ''
  },
  { 
    number: 6,
    color: '#f26aae',
    title: 'WordPress Development',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    backgroundImage: false,
    link: ''
  },
  { 
    number: 7,
    color: '#70efe5',
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
    
    //Change Content Div Color
    let backgroundColor = sectionData[to - 1].color || 'none';
    let backgroundColorStyle = '.home-section-content{ background-color:'+backgroundColor+';}';
    setTimeout(function() {  
      document.getElementById('home-section-content-style').innerHTML=backgroundColorStyle;   
    }.bind(this), 200);
    
  }

  onAfterScroll = (page) => {
    let contents = document.getElementsByClassName('content-wrapper');
    for (var i = 0; i < contents.length; i++) {
      // contents[i].style.top = '';
      contents[i].style.opacity = '0';
      contents[i].style.left = '-150%';
    }
    if (page > 1) {
      let content = document.getElementById('home-content-wrapper_'+page);  
      // content.style.top = '45%';
      content.style.opacity = '1';
      content.style.left= '0px';
    }
  }
  
  render(){

    return <div id="home" className="home">      
      <style id="home-section-content-style"></style>
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {this.onBeforeScroll(from,to)}}
        onAfterScroll={(page) => {this.onAfterScroll(page)}}
        isEnabled={true}
        swipeSensitivity={300}
        transDuration={1.2}
      >  
        { 
          sectionData.map(function(section, index){
            if (section.number === 1) {
              return <Section key={section.number}><HomeLanding/></Section>;
            } else {
              return <Section key={section.number}><HomeSection sectionNumber={section.number} sectionData={section}/></Section>;
            }
          })
        }
      </Scroller>
    </div>
  }

}

export default Home;
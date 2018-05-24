import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSection from '../HomeSection/HomeSection';
import styles from './Home.css';
import { Scroller, Section } from 'react-fully-scrolled';

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
    this.props.updateCurrentSection(to)
    console.log(to);
  }

  onAfterScroll = (page) => {
    console.log(page);
  }
  
  render(){
    
    console.log(this.props);
    
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
    
    let className = 'current-' + this.props.app.currentSection;
    let backgroundColor = sectionData[this.props.app.currentSection - 1].color || 'none';
    let backgroundColorStyle = '.home-section-content{ background-color:'+backgroundColor+';}';

    return <div id="home" className="home">
      <style>{backgroundColorStyle}</style>
      
      
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
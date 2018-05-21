import React, {Component} from 'react';
import HomeSectionOne from '../HomeSectionOne/HomeSectionOne';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour';
import HomeSectionFive from '../HomeSectionFive/HomeSectionFive';
import styles from './Home.css';


import { Scroller, Section } from 'react-fully-scrolled';

class Home extends Component {

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
    
    
    return <div id="home" className="home">
      <Scroller
        curPage={1}
        onBeforeScroll={(from, to) => {this.onBeforeScroll(from,to)}}
        onAfterScroll={(page) => {this.onAfterScroll(page)}}
        isEnabled={true}
        swipeSensitivity={300}
        transDuration={1.3}
      >
        <Section>
          <HomeSectionOne />
        </Section>
        <Section>
          <HomeSectionTwo sectionNumber={2}/>
        </Section>
        <Section>
          <HomeSectionThree />
        </Section>
        <Section>
          <HomeSectionFour />
        </Section>
        <Section>
          <HomeSectionFive />
        </Section>
      </Scroller>
    </div>
  }

}

export default Home;
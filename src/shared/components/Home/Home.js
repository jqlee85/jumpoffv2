import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSection from '../HomeSection/HomeSection';
import styles from './Home.css';

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
    backgroundImage: '',
    link: ''
  },
  { 
    number: 3,
    color: '#376ee5',
    title: 'WordPress Development',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    link: ''
  },
  { 
    number: 4,
    color: '#6DC853',
    title: 'Digital Art',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
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
    link: ''
  },
  { 
    number: 7,
    color: '#70efe5',
    title: 'Digital Art',
    content: 'WP Dev Lorem ipsum sit dolor blah blah blah blah blah blah',
    slug: 'wordpress-development',
    link: ''
  }
];

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }
  

  render(){

    return <div id="home" className="home">      
      <style id="home-section-content-style"></style>
      
         {
          sectionData.map(function(section, index){
            if (section.number === 1) {
              return <section key={section.number}><HomeLanding/></section>;
            } else {
              return <section key={section.number}><HomeSection sectionNumber={section.number} sectionData={section}/></section>;
            }
          })
        }
      
    </div>
  }

}

export default Home;
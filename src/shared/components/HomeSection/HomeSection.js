import React, {Component} from 'react';
import styles from './HomeSection.css';

class HomeSection extends Component {
  
  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount(){
 
 
  }

  
  
  render(){
    
    let sectionStyle = this.props.sectionData.backgroundImage ? {
      backgroundImage: `url(${this.props.sectionData.backgroundImage})`
    } : {};

    return <section className="jo-section home-section" id={'home-section_'+this.props.sectionData.number} style={sectionStyle}>
      <div className="home-section-content">
        <h1>{this.props.sectionData.title}</h1>
        <p>{this.props.sectionData.content}</p>
      </div>
    </section>
  }

}

export default HomeSection

import React, {Component} from 'react';
import styles from './Work.css';

class Work extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="work jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <h1>There will be work here</h1>
        </div>
      </div>
    </div>
  }

}

export default Work

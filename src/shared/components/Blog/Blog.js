import React, {Component} from 'react';
import styles from './Blog.css';

class Blog extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <h1>This will be the blog</h1>
        </div>
      </div>
    </div>
  }

}

export default Blog

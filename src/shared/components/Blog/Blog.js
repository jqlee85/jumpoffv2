import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';

class Blog extends Component {
  
  componentDidMount(){
    this.props.fetchBlogPost();
  }
  
  render(){
    return <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
          { this.props.blog.status != 'received' || ! this.props.blog.data && <h1>...Loading</h1> }
          { this.props.blog.status == 'received' && this.props.blog.data &&
            <Post blog={this.props.blog}/>
          }
        </div>
      </div>
    </div>
  }

}

export default Blog

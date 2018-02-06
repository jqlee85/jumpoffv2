import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';

class Blog extends Component {
  
  componentDidMount(){
    this.props.blog.postId = this.props.match.params.post_id;
    this.props.fetchBlogPost(this.props.blog.postId);
  }
  
  render(){
    
    let received = this.props.blog.status == 'received' && this.props.blog.data ? true : false;
    let single = ( this.props.blog.data && this.props.blog.data[1] ) ? false : true;
    let posts = new Array();
    if ( received && single ) {
      posts.push(this.props.blog.data);
    } else if ( received ) {
      posts = this.props.blog.data;
    }
    let match = this.props.match;

    return <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
          { ! received && <LoadingRectangles /> }
          { received &&
            posts.map(function(post, index){
              return <Post post={post} single={single} match={match}/>;
            })
          }
        </div>
      </div>
    </div>
  }

}

export default Blog

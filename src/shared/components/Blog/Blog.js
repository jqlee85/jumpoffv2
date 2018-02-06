import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';

class Blog extends Component {
  
  componentDidMount(){
    
    console.log("THE POST ID FROM URL");
    this.props.blog.postId = this.props.match.params.post_id;
    console.log(this.props.match.params);
    console.log('PROPS');
    console.log(this.props);
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
          { ! received && <h1 class="jo-blog-loading">...Loading</h1> }
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

import React, {Component} from 'react';
import styles from './Post.css';


class Post extends Component {

  render(){
    
    let id = this.props.post.id;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title.rendered;
    let content = this.props.post.content.rendered;

    return <article div id={postID} data-post-id={id} className="jo-post">
      <h1 className="jo-post-title">{title}</h1>
      <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  }
}


export default Post

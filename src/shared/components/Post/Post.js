import React, {Component} from 'react';
import styles from './Post.css';


class Post extends Component {

  render(){
    
    let id = this.props.post.id;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title.rendered;
    let content = this.props.post.content.rendered;
    let postLink = this.props.match.url + id;

    console.log(this.props);

    return <article div id={postID} data-post-id={id} className="jo-post">
      { !this.props.single && <a href={postLink}><h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/></a> }
      { this.props.single && <h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/> }
      <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  }
}


export default Post

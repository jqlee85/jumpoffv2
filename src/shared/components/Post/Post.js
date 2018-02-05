import React, {Component} from 'react';
import styles from './Post.css';


class Post extends Component {

  render(){
    console.log(this.props);
    return <div className="jo-post">

      { this.props.blog.status == 'received' && this.props.blog.data &&
        <article className="jo-post-wrapper">
          <h1 className="jo-post-title">{this.props.blog.data.title.rendered}</h1>
         
            <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: this.props.blog.data.content.rendered }} />
            
        </article>
      } 
    </div>
  }
}


export default Post

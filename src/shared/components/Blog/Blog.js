import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Blog extends Component {
  
  componentWillMount(){
    // this.props.blog.postSlug = this.props.match.params.post_slug;
    // this.props.fetchBlogPost(this.props.blog.postSlug);
  }
  
  render(){
    
    // let received = this.props.blog.status == 'received' && this.props.blog.data ? true : false;
    // let single = ( this.props.blog.data && this.props.blog.data[1] ) ? false : true;
    // let posts = new Array();
    // if ( received && single ) {
    //   posts.push(this.props.blog.data[0]);
    // } else if ( received ) {
    //   posts = this.props.blog.data;
    // }
    // let match = this.props.match;

    
    return <Query
      query={gql`
        {
          posts {
            edges {
              node {
                id
                title
                date
                content
              }
            }
          }
        }
      `}
    >  
    <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
        {({ loading, error, data }) => {
          if (loading) return <LoadingRectangles />;
          if (error) return <p>Error :(</p>;
          return data.posts.edges.map(({ node }) => (
            <Post post={node}/>
          ));
        }}
        </div>
      </div>
    </div>
    </Query>
  }

}

export default Blog

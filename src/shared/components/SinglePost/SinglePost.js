import React, {Component} from 'react';
import styles from './SinglePost.css';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import Post from '../Post/Post';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SINGLE_POST_QUERY = gql`
  query post($slug: String!){
    postBy(slug: $slug) {
      id
      title
      slug
      date
      content
    }
  }
`;

const SinglePost = ({ match }) => {
  
    let slug = { slug: match.params.post_slug }

    return <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <div className="single-post">
            <Query query={SINGLE_POST_QUERY} variables={slug}>
              {({ loading, error, data }) => {
                if (loading) return (<LoadingRectangles/>);
                if (error) return (<p>Error Loading Post</p>);
                return (
                    <Post post={data.postBy}/>
                );
              }}  
            </Query>
          </div>
        </div>
      </div>
    </div>
  
}

export default SinglePost;


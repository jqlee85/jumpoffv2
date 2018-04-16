import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Work = () => (
  <Query
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
  {({ loading, error, data }) => {
    if (loading) return <LoadingRectangles/>;
    if (error) return <p>Error :(</p>;
    return data.posts.edges.map(({ node }) => (
        <Post post={node}/>
    ));
  }}
  </Query>
);

export default Work;

<div className="blog jo-section">
  <div className="jo-row">
    <div className="jo-content">
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.posts.edges.map(({ node }) => (
        <Post post={node}/>
      ));
    }}
    </div>
  </div>
</div>
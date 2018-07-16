import React, {Component} from 'react';
import styles from './SinglePost.css';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import Post from '../Post/Post';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import client from '../../graphql/apolloClient'

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

class SinglePost extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount(){

    if(!client.cache.data.data.ROOT_QUERY){
      // an error or anything you want to be done
      console.log('cache NOT defined');
    }else{ 
      console.log('cache defined');
      console.log(client.cache);
      
      const postFromCache = client.readQuery({
        query: gql`
          query postBy($slug: String!) {
            postBy(slug: $slug) {
              id
              title
              slug
              date
              content
            }
          }
        `,
        variables: {
          slug: 'putting-things-together',
        },
      });

    }

  }

    
  render(){ 

    let slug = { slug: this.props.match.params.post_slug }

    if (typeof postFromCache !== 'undefined') {
      console.log('postFromCache!');
      console.log(postFromCache);

    }

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
  
}

export default SinglePost;


import React, {Component} from 'react';
import styles from './Work.css';

import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { getAllPosts } from '../../graphql/queries'


// class Work extends Component {
  
//   render(){
//     return <div className="work jo-section">
//       <div className="jo-row">
//         <div className="jo-content">
//           <h1>There will be work here</h1>
//           {/*posts &&
//             posts.edges.map(post => (
//               <div>
//                 <h1>{post.node.title}</h1>
//                 <p>{post.node.content}</p>
//               </div>
//             ))*/}
//         </div>
//       </div>
//     </div>
//   }

// }

// export default Work


const Work = () => (
  <Query
    query={gql`
    {
      posts {
        edges {
          node {
            id
            title
            slug
            date
            content
          }
        }
      }
    }
    `}
  >  
  {({ loading, error, data }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.posts.edges.map(({ node }) => (
      <div key={`${node.id}`}>
        <h2>{`${node.title}`}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
      </div>
    ));
  }}
  </Query>
);

export default Work;
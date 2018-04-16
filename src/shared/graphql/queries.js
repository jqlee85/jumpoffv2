import { gql } from 'graphql-tag';
import { postFragment } from './fragments';

export const getAllPosts = gql`
  query getAllPosts {
    posts {
      ...PostData
    }
  }
  ${postFragment}
`;

export const ExchangeRates = () => (
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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);



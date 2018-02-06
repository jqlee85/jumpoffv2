import "isomorphic-fetch";

const blogAPIUrl = 'https://api.jumpoff.io/wp-json/wp/v2/';

/* Actions */

export const fetchBlogPostRequest = id => {
  console.log('fetchBlogPostRequest() dispatched');
  console.log('id');console.log(id);
  return {
    type: 'FETCH_BLOG_POST_REQUEST',
    id
  }
}

export function fetchBlogPostSuccess(postData){
  console.log('success' + postData);
  return { 
    type: 'FETCH_BLOG_POST_REQUEST', 
    payload: postData 
  }
}

export function fetchBlogPostError(err){
  return { 
    type: 'FETCH_BLOG_POST_ERROR',
    payload: err 
  }
}

export const fetchBlogPost = (id) => (dispatch, getState) => {
  console.log('fetchBlogPost');
  
  if (!id) {
    id = '';
  }
  

  let apiEndpoint = blogAPIUrl + 'posts/' + id;

  dispatch(fetchBlogPostRequest(id));
  return fetch( apiEndpoint )
    .then(response => response.json())
    .then(postData => dispatch(fetchBlogPostSuccess(postData)))
    .catch(err => dispatch(fetchBlogPostError(err)));
};

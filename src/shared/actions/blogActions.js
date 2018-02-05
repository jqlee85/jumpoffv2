import "isomorphic-fetch";

/* Actions */

export function fetchBlogPostRequest(){
  console.log('fetchBlogPostRequest() dispatched');
  return {
    type: 'FETCH_BLOG_POST_REQUEST'
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

export const fetchBlogPost = () => (dispatch, getState) => {
  console.log('fetchBlogPost');
  dispatch(fetchBlogPostRequest());
  return fetch("https://api.jumpwriter.com/wp-json/wp/v2/posts/1")
    .then(response => response.json())
    .then(postData => dispatch(fetchBlogPostSuccess(postData)))
    .catch(err => dispatch(fetchBlogPostError(err)));
};

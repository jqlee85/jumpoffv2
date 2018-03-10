import "isomorphic-fetch";

const blogAPIUrl = 'https://api.jumpoff.io/wp-json/wp/v2/';

/* Actions */

export const fetchBlogPostRequest = slug => {
  console.log('fetchBlogPostRequest() dispatched');
  return {
    type: 'FETCH_BLOG_POST_REQUEST',
    slug
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

export const fetchBlogPost = (slug) => (dispatch, getState) => {
  slug = slug ? '?slug=' + slug : '?per_page=3';
  let apiEndpoint = blogAPIUrl + 'posts' + slug;
  dispatch(fetchBlogPostRequest(slug));
  return fetch( apiEndpoint )
    .then(response => response.json())
    .then(postData => dispatch(fetchBlogPostSuccess(postData)))
    .catch(err => dispatch(fetchBlogPostError(err)));
};

// Blog Reducer

const blogPostState = {
  postData: false,
  status: false,
  requestData: false,
  postID: false,
  postSlug: false
}

const blogReducer = ( state = blogPostState, action) => {
  switch (action.type) {
    case 'FETCH_BLOG_POST_REQUEST':
      return { ...state, type: 'text', data: action.payload, status: 'received' };
    case 'FETCH_BLOG_POST_REQUEST':
      return { ...state, type: 'text', status: 'requested' };
    case 'FETCH_BLOG_POST_ERROR':
      return { ...state, type: 'text', data: action.payload, status: 'error' };
    default:
      return state;
  }
}

export default blogReducer;


import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,

  GET_SINGLE_POST_FAIL,
  GET_SINGLE_POST_REQUEST,
  GET_SINGLE_POST_SUCCESS,

 CREATE_REVIEW_REQUEST,
 CREATE_REVIEW_SUCCESS,
 CREATE_REVIEW_FAIL,

 DELETE_POST_REQUEST,
 DELETE_POST_FAIL,
 DELETE_POST_SUCCESS,

 DELETE_REVIEW_FAIL,
 DELETE_REVIEW_REQUEST,
 DELETE_REVIEW_SUCCESS,

 GET_ALL_REVIEWS_REQUEST,
 GET_ALL_REVIEWS_FAIL,
 GET_ALL_REVIEWS_SUCCESS,
} from "../constants/postConstants";

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { loading: true };
    case CREATE_POST_SUCCESS:
        return { loading: false, success: true, post: action.payload };
    case CREATE_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getAllPostReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
      case GET_ALL_POST_REQUEST:
        return { loading: true, posts: [] };
      case GET_ALL_POST_SUCCESS:
        return { loading: false, success: true, posts: action.payload };
      case GET_ALL_POST_FAIL:
        return { loading: false, error: action.payload, posts: [] };
      default:
        return state;
    }
  };

  export const getSinglePostReducer = (state = { post: [] }, action) => {
    switch (action.type) {
      case GET_SINGLE_POST_REQUEST:
        return { loading: true, post: [] };
      case GET_SINGLE_POST_SUCCESS:
        return { loading: false, success: true, post: action.payload };
      case GET_SINGLE_POST_FAIL:
        return { loading: false, error: action.payload, post: [] };
      default:
        return state;
    }
  };


  export const createReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_REVIEW_REQUEST:
        return { loading: true };
      case CREATE_REVIEW_SUCCESS:
          return { loading: false, success: true};
      case CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const deletePostReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_POST_REQUEST:
        return {...state, loading: true };
      case DELETE_POST_SUCCESS:
          return {...state,loading: false, success: true, post: action.payload };
      case DELETE_POST_FAIL:
        return {...state,loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

export const deleteReviewReducer = (state ={} ,action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case DELETE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true };
    case DELETE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

  
export const getAllReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS_REQUEST:
      return { loading: true, reviews: [] };
    case GET_ALL_REVIEWS_SUCCESS:
      return { loading: false, success: true, reviews: action.payload };
    case GET_ALL_REVIEWS_FAIL:
      return { loading: false, error: action.payload, reviews: [] };
    default:
      return state;
  }
};
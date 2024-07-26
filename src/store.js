import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import{ thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {userLoginReducer,userRegisterReducer,userUpdateProfileReducer,userDetailsReducer} from "./reducers/userReducers";
import{createPostReducer,getAllPostReducer,createReviewReducer, deletePostReducer, deleteReviewReducer, getAllReviewReducer} from './reducers/postReducer';


const reducer = combineReducers({
userLogin:userLoginReducer,  
userRegister:userRegisterReducer,
userUpdateProfile:userUpdateProfileReducer,
userDetails:userDetailsReducer,
postCreate:createPostReducer,
getAllPost:getAllPostReducer,
createReview:createReviewReducer,
deletePost : deletePostReducer,
deleteReview : deleteReviewReducer,
getAllReviews:getAllReviewReducer,


});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
    userLogin:{userInfo: userInfoFromStorage}
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

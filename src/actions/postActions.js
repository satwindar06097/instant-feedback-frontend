import axios from "axios";
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
} from "../constants/postConstants";

export const createPost =
  (title, content, image) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_POST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "https://instant-feedback-backend.onrender.com/api/posts/create/",
        formData,
        config
      );
      console.log(data);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAIL,
        success: false,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const getAll_Post = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "https://instant-feedback-backend.onrender.com/api/posts/all/",
      config
    );
    console.log(data);
    dispatch({
      type: GET_ALL_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const create_Review =
  (name, email, photo, review_image, text_review, video_review, slug) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_REVIEW_REQUEST,
      });

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      if (photo) formData.append("photo", photo);
      if (review_image) formData.append("review_image", review_image);
      formData.append("text_review", text_review);
      if (video_review) formData.append("video_review", video_review);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const slugStr = typeof slug === "string" ? slug : slug.slug; // Adjust based on actual structure

      const { data } = await axios.post(
        `https://instant-feedback-backend.onrender.com/api/posts/create/reviews/${slugStr}/`,
        formData,
        config
      );
      console.log(data);
      dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_REVIEW_FAIL,
        success: false,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const delete_Post = (slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const slugStr = typeof slug === "string" ? slug : slug.slug;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://instant-feedback-backend.onrender.com/api/posts/delete/${slugStr}/`,
      config
    );
   
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      success: false,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const delete_Review = (my_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `https://instant-feedback-backend.onrender.com/api/posts/review/delete/${my_id}/`,
      config
    );
    console.log(data);

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      success: false,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

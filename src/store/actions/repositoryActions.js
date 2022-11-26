import axios from "axios";
import {
  DELETE_REPOSITORY,
  EDIT_REPOSITORY,
  ERROR_REPOSITORY,
  FETCH_REPOSITORY,
  LOADING_REPOSITORY,
  RESPOND_REPOSITORY,
} from "../constants/repositoryConstants";

export const fetchRepositories = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_REPOSITORY });

    const { data } = await axios.get("/api/team");

    dispatch({ type: FETCH_REPOSITORY, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR_REPOSITORY,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const respondRepository =
  ({ id, approve }) =>
  async (dispatch) => {
    try {
      await axios.put(`/api/team/${id}/approve?value=${approve}`);

      dispatch({
        type: RESPOND_REPOSITORY,
        payload: { id, status: approve ? "accepted" : "rejected" },
      });
    } catch (error) {
      dispatch({
        type: ERROR_REPOSITORY,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// FIXME: Data update
export const editRepository = (payload) => async (dispatch) => {
  try {
    await axios.put(`/api/team/${payload._id}`, payload);

    dispatch({ type: EDIT_REPOSITORY, payload });
  } catch (error) {
    dispatch({
      type: ERROR_REPOSITORY,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteRepository = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/team/${id}`);

    dispatch({ type: DELETE_REPOSITORY, payload: id });
  } catch (error) {
    dispatch({
      type: ERROR_REPOSITORY,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

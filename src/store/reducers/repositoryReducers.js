/* eslint-disable import/prefer-default-export, default-param-last */
import {
  DELETE_REPOSITORY,
  EDIT_REPOSITORY,
  ERROR_REPOSITORY,
  FETCH_REPOSITORY,
  LOADING_REPOSITORY,
  RESPOND_REPOSITORY,
} from "../constants/repositoryConstants";

/** TODO: Try wether `loading` and `error` could be omitted
 * Cases:
 * 1. Fetch all repositories. TODO: Implement filters
 * 2. Update a repository
 * 3. Respond (approve/reject) to a repository
 * 4. Delete a repository
 * 5. Error repository
 */
export const repositoriesReducer = (
  state = { loading: false, error: null, data: [] },
  action,
) => {
  switch (action.type) {
    case LOADING_REPOSITORY: {
      return { loading: true, error: null, data: [...state.data] };
    }
    case FETCH_REPOSITORY: {
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    }
    case EDIT_REPOSITORY: {
      const { _id, name, ...rest } = action.payload;

      const data = state.data.map((r) =>
        r._id === _id
          ? { ...r, _id, name, repository: { ...r.repository, ...rest } }
          : r,
      );

      return {
        loading: false,
        error: null,
        data,
      };
    }
    case RESPOND_REPOSITORY: {
      const data = state.data.map((r) =>
        r._id === action.payload.id
          ? { ...r, status: action.payload.status }
          : r,
      );

      return {
        loading: false,
        error: null,
        data,
      };
    }
    case DELETE_REPOSITORY: {
      return {
        loading: false,
        error: null,
        data: state.data.filter((r) => r._id !== action.payload),
      };
    }
    case ERROR_REPOSITORY: {
      return {
        loading: false,
        error: action.payload,
        data: [...state.data],
      };
    }
    default:
      return state;
  }
};

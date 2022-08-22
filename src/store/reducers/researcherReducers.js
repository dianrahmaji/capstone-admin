/* eslint-disable import/prefer-default-export, default-param-last */
import {
  APPROVE_RESEARCHER,
  DELETE_RESEARCHER,
  EDIT_RESEARCHER,
  ERROR_RESEARCHER,
  FETCH_RESEARCHER,
  LOADING_RESEARCHER,
} from "../constants/researcherConstants";

/** TODO: Try wether `loading` and `error` could be omitted
 * 1. Fetch all researchers. TODO: Implement filters
 * 2. Approve a researcher
 * 3. Delete a researcher
 * 4. Error researchers
 */
export const researchersReducer = (
  state = { loading: false, error: null, data: [] },
  action,
) => {
  switch (action.type) {
    case LOADING_RESEARCHER: {
      return { loading: true, error: null, data: state.data };
    }
    case FETCH_RESEARCHER: {
      return { loading: false, error: null, data: action.payload };
    }
    case APPROVE_RESEARCHER: {
      const data = state.data.map((r) =>
        r._id === action.payload ? { ...r, status: "accepted" } : r,
      );
      return { loading: false, error: null, data };
    }
    case EDIT_RESEARCHER: {
      const data = state.data.map((r) =>
        r._id === action.payload._id ? { ...r, ...action.payload } : r,
      );

      return {
        loading: false,
        error: null,
        data,
      };
    }
    case DELETE_RESEARCHER: {
      return {
        loading: false,
        error: null,
        data: state.data.filter((r) => r._id !== action.payload),
      };
    }
    case ERROR_RESEARCHER: {
      return { loading: false, error: action.payload, data: [...state.data] };
    }
    default:
      return state;
  }
};

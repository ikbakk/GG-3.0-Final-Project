import { useReducer } from "react";
import axios from "axios";
import { Action, ErrorResponse, ResData, State } from "@/types/useSearch";

const initialState = <T>(): State<T> => ({
  data: null,
  isLoading: true,
  error: null,
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "SEARCH_START":
      return { ...state, isLoading: true, error: null };
    case "SEARCH_SUCCESS":
      return { ...state, isLoading: false, error: null, data: action.payload };
    case "SEARCH_ERROR":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const useSearch = <T>(endpoint: string) => {
  const [state, dispatch] = useReducer(reducer<T>, initialState<T>());
  const baseUrl =
    import.meta.env.VITE_ENVIRONMENT === "production"
      ? "/api/search/"
      : "http://localhost:3000/api/search/";

  const fetchData = async () => {
    try {
      dispatch({ type: "SEARCH_START" });
      const response = await axios.get<ResData<T>>(baseUrl + endpoint);
      dispatch({ type: "SEARCH_SUCCESS", payload: response.data.data });
    } catch (error) {
      const err = error as ErrorResponse;
      dispatch({ type: "SEARCH_ERROR", error: err.message });
    }
  };

  return { state, fetchData };
};

export default useSearch;

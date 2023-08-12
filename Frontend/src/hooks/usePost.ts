import { useReducer } from "react";
import axios from "axios";
import {
  Action,
  ErrorResponse,
  ResData,
  State,
  UsePostOptions,
} from "@/types/usePost";

const initialState = <T>(): State<T> => ({
  data: null,
  isLoading: true,
  error: null,
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "POST_START":
      return { ...state, isLoading: true, error: null };
    case "POST_SUCCESS":
      return { ...state, isLoading: false, error: null, data: action.payload };
    case "POST_ERROR":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const usePost = <T, E>({ endpoint, body }: UsePostOptions<E>) => {
  const [state, dispatch] = useReducer(reducer<T>, initialState<T>());
  const baseUrl = "http://localhost:3000/api/";

  const fetchData = async () => {
    try {
      dispatch({ type: "POST_START" });
      const response = await axios.post<ResData<T>>(baseUrl + endpoint, body);
      dispatch({ type: "POST_SUCCESS", payload: response.data.data });
    } catch (error) {
      const err = error as ErrorResponse;
      dispatch({ type: "POST_ERROR", error: err.response.data.message });
    }
  };

  return { state, fetchData };
};

export default usePost;

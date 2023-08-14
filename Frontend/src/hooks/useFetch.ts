import { useEffect, useReducer } from "react";
import axios from "axios";
import { Action, ErrorResponse, ResData, State } from "@/types/useFetch";

const initialState = <T>(): State<T> => ({
  data: null,
  isLoading: true,
  error: null,
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, error: null, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

const useFetch = <T>(endpoint: string) => {
  const [state, dispatch] = useReducer(reducer<T>, initialState<T>());
  const baseUrl =
    import.meta.env.VITE_ENVIRONMENT === "production"
      ? "/api/"
      : "http://localhost:3000/api/";
  console.log(baseUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_START" });
        const response = await axios.get<ResData<T>>(baseUrl + endpoint);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
      } catch (error) {
        const err = error as ErrorResponse;
        dispatch({ type: "FETCH_ERROR", error: err.message });
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
};

export default useFetch;

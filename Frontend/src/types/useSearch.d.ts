export interface HooksArgs {
  endpoint: string;
}

export type State<T> = {
  data: T[] | null;
  isLoading: boolean;
  error: string | null;
};

export type Action<T> =
  | { type: "SEARCH_START" }
  | { type: "SEARCH_SUCCESS"; payload: T[] }
  | { type: "SEARCH_ERROR"; error: string };

export interface ErrorResponse {
  status: string;
  message: string;
}

export type ResData<T> = {
  status: string;
  data: T[];
  message: string;
};

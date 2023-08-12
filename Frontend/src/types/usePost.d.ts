import { AxiosError } from "axios";

export interface HooksArgs {
  endpoint: string;
}

export type UsePostOptions<T> = {
  endpoint: string;
  body: T;
};

export type State<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export type Action<T> =
  | { type: "POST_START" }
  | { type: "POST_SUCCESS"; payload: T }
  | { type: "POST_ERROR"; error: string };

export interface ErrorResponse extends AxiosError {
  response: {
    data: {
      status: string;
      message: string;
    };
  };
}

export type ResData<T> = {
  status: string;
  data: T;
  message: string;
};

import { Comment } from "../../types";

export interface ContextValue {
  comments: Comment[];
  formInputs: formInputs;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  setFormInputs: React.Dispatch<React.SetStateAction<formInputs>>;
  fetchData: () => Promise<void>;
}

export interface ContextProvider {
  children: React.ReactNode;
}

export interface FormInputs {
  username: string;
  comment: string;
}

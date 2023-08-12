import { Comment } from "../../types";

export interface ContextValue {
  comments: Comment[];
  formInputs: formInputs;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  setFormInputs: React.Dispatch<React.SetStateAction<formInputs>>;
}

export interface ContextProvider {
  children: React.ReactNode;
}

export interface formInputs {
  username: string;
  comment: string;
}

import { createContext, useEffect, useState } from "react";
import { Comment } from "../../types";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import {
  ContextProvider,
  ContextValue,
  FormInputs,
} from "@/types/CommentContext";
import usePost from "@/hooks/usePost";

const initialFormInputs = {
  username: "",
  comment: "",
};

export const CommentContext = createContext<ContextValue>({} as ContextValue);

const CommentsProvider = ({ children }: ContextProvider) => {
  const params = useParams();
  const endpoint = `comments/${params.id}`;
  const [comments, setComments] = useState<Comment[]>([] as Comment[]);
  const [formInputs, setFormInputs] = useState<FormInputs>(initialFormInputs);
  const { data, isLoading } = useFetch<Comment>(endpoint);
  const { state, fetchData } = usePost<Comment, FormInputs>({
    endpoint,
    body: formInputs,
  });
  const newComment = state.data;

  useEffect(() => {
    if (newComment) {
      setComments(
        [...comments, newComment].sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        ),
      );
    }
  }, [newComment]);

  useEffect(() => {
    if (!isLoading && data) {
      const sortedComments = data.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
      setComments(sortedComments);
    }
  }, [data, isLoading]);

  const contextValue = {
    comments,
    formInputs,
    setFormInputs,
    setComments,
    fetchData,
  };

  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentsProvider;

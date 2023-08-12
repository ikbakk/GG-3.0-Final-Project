import { createContext, useEffect, useState } from "react";
import { Comment } from "../../types";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import {
  ContextProvider,
  ContextValue,
  formInputs,
} from "@/types/CommentContext";

export const CommentContext = createContext<ContextValue>({} as ContextValue);

const CommentsProvider = ({ children }: ContextProvider) => {
  const params = useParams();
  const [comments, setComments] = useState<Comment[]>([] as Comment[]);
  const [formInputs, setFormInputs] = useState<formInputs>({} as formInputs);
  const { data, isLoading } = useFetch<Comment>(`comments/${params.id}`);

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
  };

  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentsProvider;

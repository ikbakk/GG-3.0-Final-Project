import { useParams } from "react-router-dom";
import { Comment } from "../../../types";
import CommentCard from "./CommentCard";
import useFetch from "@/hooks/useFetch";

const Comments = () => {
  const params = useParams();
  const { data } = useFetch<Comment>(`comments/${params.id}`);
  return (
    <div className="h-4/5 rounded-lg p-4 outline outline-1">
      <div className="flex flex-col gap-4">
        {data?.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment.comment}
            username={comment.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

import { useParams } from "react-router-dom";
import { Comment } from "../../../types";
import CommentCard from "./CommentCard";
import useFetch from "@/hooks/useFetch";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const Comments = () => {
  const params = useParams();
  const { data } = useFetch<Comment>(`comments/${params.id}`);
  return (
    <div className="relative flex grow-0 basis-[70%] flex-col overflow-hidden p-4">
      <h2 className="text-xl font-semibold text-primary">Comments</h2>
      <Separator className="my-2 bg-primary" />
      <ScrollArea className="px-2">
        <div className="absolute top-0 z-10 h-4 w-[93%] bg-gradient-to-b from-accent via-accent/50 to-accent/0"></div>
        <div className="relative flex flex-col gap-2 px-2">
          {data?.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment.comment}
              username={comment.username}
              timestamp={comment.timestamp}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Comments;

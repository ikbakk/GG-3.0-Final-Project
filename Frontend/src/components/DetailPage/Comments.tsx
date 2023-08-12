import CommentCard from "./CommentCard";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { useRef, useContext } from "react";
import { CommentContext } from "@/contexts/CommentContext";

const Comments = () => {
  const scrollArea = useRef<HTMLDivElement>(null);
  const { comments } = useContext(CommentContext);

  return (
    <div className="relative flex grow-0 basis-[70%] flex-col overflow-hidden p-4">
      <h2 className="text-xl font-semibold text-primary">Comments</h2>
      <Separator className="my-2 bg-primary" />
      <ScrollArea ref={scrollArea} className="px-2">
        <div className="absolute top-0 z-10 h-4 w-[93%] bg-gradient-to-b from-accent via-accent/50 to-accent/0"></div>
        <div className="relative flex flex-col gap-2 px-2">
          {comments?.map((comment) => (
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

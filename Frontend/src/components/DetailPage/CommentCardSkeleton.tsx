import { Skeleton } from "../ui/skeleton";

const CommentCardSkeleton = () => {
  return (
    <div className="flex h-10 items-center  gap-2 px-1 py-6 ">
      <Skeleton className="h-9 w-9 rounded-full bg-black/40 outline outline-1 outline-primary" />
      <div className="flex w-[80%] flex-col gap-2 bg-card p-2">
        <Skeleton className="h-2 w-[30%] bg-primary" />
        <Skeleton className="h-3 w-[75%] bg-secondary-foreground" />
      </div>
    </div>
  );
};

export default CommentCardSkeleton;

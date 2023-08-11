import useTimeAgo from "@/hooks/useTimeAgo";
import CustomAvatar from "../Avatar";

interface CommentCardProps {
  comment: string;
  username: string;
  timestamp: string;
}

const CommentCard = ({ comment, username, timestamp }: CommentCardProps) => {
  const timeAgo = useTimeAgo(timestamp);
  const firstLetter = username.charAt(0).toLocaleUpperCase();
  return (
    <div className="flex w-fit items-center gap-2">
      <CustomAvatar src="" fallback={firstLetter} />
      <div>
        <div className="bg-card p-2">
          <p className="text-xs font-semibold text-primary">{username}</p>
          <p className="first-letter:capitalize">{comment}</p>
        </div>
        <p className="text-xs">{timeAgo}</p>
      </div>
    </div>
  );
};

export default CommentCard;

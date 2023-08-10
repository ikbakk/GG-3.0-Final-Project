import { Card } from "../ui/card";

interface CommentCardProps {
  username: string;
  comment: string;
}

const CommentCard = ({ comment, username }: CommentCardProps) => {
  return (
    <Card className="flex items-center px-3 py-2">
      <p>
        <strong>{username}: </strong>
        {comment}
      </p>
    </Card>
  );
};

export default CommentCard;

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarProps {
  src: string;
  fallback: string;
}

const CustomAvatar = ({ src, fallback }: AvatarProps) => {
  return (
    <Avatar className="cursor-default select-none outline outline-1 outline-ring">
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;

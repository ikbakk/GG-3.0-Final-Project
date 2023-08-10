import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
  src: string;
}

const CustomAvatar = ({ src }: AvatarProps) => {
  return (
    <Avatar className="cursor-default select-none">
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;

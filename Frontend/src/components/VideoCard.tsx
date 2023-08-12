import useFetch from "@/hooks/useFetch";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Product } from "../../types";

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imgUrl: string;
  id: string;
}

const VideoCard = ({ imgUrl, title, id, ...props }: VideoCardProps) => {
  const { data } = useFetch<Product>(`products/${id}`);

  return (
    <Card
      {...props}
      className="group relative flex h-80 w-64 items-end overflow-hidden border-none duration-150 hover:cursor-pointer"
    >
      <img src={imgUrl} className="absolute top-0 h-full w-full object-cover" />
      <div className="absolute h-full w-full bg-gradient-to-t from-primary via-neutral-600/30 to-black/10 duration-300 group-hover:via-primary/50 group-hover:backdrop-brightness-50"></div>
      <CardHeader className="relative z-[1]">
        <CardTitle className="leading-relaxed text-secondary duration-150 group-hover:-translate-y-7 group-hover:text-primary-foreground">
          {title}
        </CardTitle>
        <CardDescription className="absolute -translate-y-10 font-semibold text-primary-foreground opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 group-hover:delay-100">
          {data?.length} Products
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default VideoCard;

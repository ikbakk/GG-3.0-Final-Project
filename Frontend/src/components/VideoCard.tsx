import { Card, CardHeader, CardTitle } from "./ui/card";

interface VideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imgUrl: string;
}

const VideoCard = ({ imgUrl, title, ...props }: VideoCardProps) => {
  return (
    <Card
      {...props}
      className={`group relative flex h-80 w-64 items-end overflow-hidden border-none duration-150 hover:shadow-lg hover:shadow-black/50 bg-[url('${imgUrl}')] hover:cursor-pointer`}
    >
      <div className="absolute h-full w-full bg-gradient-to-t from-black/60 via-neutral-500/30 to-slate-100/10 duration-150 group-hover:backdrop-brightness-50"></div>
      <CardHeader className="z-[1]">
        <CardTitle className="leading-relaxed text-white/60 duration-150 group-hover:text-white">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default VideoCard;

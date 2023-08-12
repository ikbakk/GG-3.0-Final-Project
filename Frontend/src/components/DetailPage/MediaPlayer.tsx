import { MediaPlayerContext } from "@/contexts/MediaPlayeContext";
import { useContext } from "react";

const MediaPlayer = () => {
  const { embeddedLink } = useContext(MediaPlayerContext);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <iframe className="h-full w-full" allowFullScreen src={embeddedLink} />
    </div>
  );
};

export default MediaPlayer;

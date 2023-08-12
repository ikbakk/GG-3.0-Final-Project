import VideoCard from "@/components/VideoCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import useFetch from "@/hooks/useFetch";
import { Video } from "../../types";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { data } = useFetch<Video>("videos");

  const handleCardClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <ScrollArea>
      <div className="flex w-full flex-wrap justify-evenly gap-4 p-4">
        {data?.map((item) => (
          <VideoCard
            onClick={() => handleCardClick(item.id)}
            key={item.id}
            id={item.id}
            title={item.title}
            imgUrl={item.url}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default HomePage;

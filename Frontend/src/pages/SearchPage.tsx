import VideoCard from "@/components/VideoCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchPage = () => {
  const tes = [
    {
      id: 1,
      title: "Product 1",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 2,
      title: "Product 2",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 3,
      title: "Product 3",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 4,
      title: "Product 4",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 4,
      title: "Product 4",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 4,
      title: "Product 4",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
    {
      id: 4,
      title: "Product 4",
      imgUrl: "https://source.unsplash.com/dIMJWLx1YbE/256x320",
    },
  ];

  return (
    <ScrollArea>
      <div className="flex w-full flex-wrap justify-evenly gap-4 p-4">
        {tes.map((item) => (
          <VideoCard key={item.id} title={item.title} imgUrl={item.imgUrl} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default SearchPage;

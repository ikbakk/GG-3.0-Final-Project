import CommentForm from "@/components/DetailPage/CommentForm";
import Comments from "@/components/DetailPage/Comments";
import MediaPlayer from "@/components/DetailPage/MediaPlayer";
import ProductsContainer from "@/components/DetailPage/ProductsContainer";

const DetailPage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 overflow-hidden p-4 md:flex-row">
      <div className="flex h-full w-full flex-col items-center gap-4 md:w-3/5 lg:w-4/5">
        <MediaPlayer />
        <ProductsContainer />
      </div>
      <div className="flex h-full w-full grow-0 flex-col overflow-hidden bg-accent md:w-2/5 lg:w-1/5">
        <Comments />
        <CommentForm />
      </div>
    </div>
  );
};

export default DetailPage;

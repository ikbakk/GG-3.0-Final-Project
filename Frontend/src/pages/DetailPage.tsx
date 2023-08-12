import CommentForm from "@/components/DetailPage/CommentForm";
import Comments from "@/components/DetailPage/Comments";
import MediaPlayer from "@/components/DetailPage/MediaPlayer";
import ProductsContainer from "@/components/DetailPage/ProductsContainer";
import CommentsProvider from "@/contexts/CommentContext";
import MediaPlayerProvider from "@/contexts/MediaPlayeContext";

const DetailPage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 overflow-hidden p-4 md:flex-row">
      <div className="flex h-full w-full flex-col items-center gap-4 md:w-3/5 lg:w-4/5">
        <MediaPlayerProvider>
          <MediaPlayer />
          <ProductsContainer />
        </MediaPlayerProvider>
      </div>
      <div className="flex h-full w-full grow-0 flex-col overflow-hidden bg-accent md:w-2/5 lg:w-1/5">
        <CommentsProvider>
          <Comments />
          <CommentForm />
        </CommentsProvider>
      </div>
    </div>
  );
};

export default DetailPage;

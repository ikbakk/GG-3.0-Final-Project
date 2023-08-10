const MediaPlayer = () => {
  return (
    <div className="flex h-full w-4/5 items-center justify-center">
      <iframe
        className="h-full w-full rounded-2xl duration-150 hover:rounded-none md:h-[60%] md:w-[90%] lg:w-[80%]"
        allowFullScreen
        src="https://www.youtube.com/embed/QrZFBPHyX_I"
      />
    </div>
  );
};

export default MediaPlayer;

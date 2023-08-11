const MediaPlayer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <iframe
        className="h-full w-full"
        allowFullScreen
        src="https://www.youtube.com/embed/QrZFBPHyX_I"
      />
    </div>
  );
};

export default MediaPlayer;

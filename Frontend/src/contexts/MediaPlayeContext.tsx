import { ContextProvider, ContextValue } from "@/types/MediaPlayerContext";
import { createContext, useState } from "react";

export const MediaPlayerContext = createContext<ContextValue>(
  {} as ContextValue,
);

const MediaPlayerProvider = ({ children }: ContextProvider) => {
  const [embeddedLink, setEmbeddedLink] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

  const contextValue = {
    embeddedLink,
    selectedCard,
    setEmbeddedLink,
    setSelectedCard,
  };
  return (
    <MediaPlayerContext.Provider value={contextValue}>
      {children}
    </MediaPlayerContext.Provider>
  );
};

export default MediaPlayerProvider;

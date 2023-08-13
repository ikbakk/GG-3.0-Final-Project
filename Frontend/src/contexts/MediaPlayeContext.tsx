import { ContextProvider, ContextValue } from "@/types/MediaPlayerContext";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const MediaPlayerContext = createContext<ContextValue>(
  {} as ContextValue,
);

interface InitialState {
  embeddedLink: string;
  productId: string;
}

const MediaPlayerProvider = ({ children }: ContextProvider) => {
  const { state } = useLocation();
  const checkRouterState = (): InitialState => {
    if (!state) {
      return {
        embeddedLink: "",
        productId: "",
      };
    }

    return state;
  };
  const initialState = checkRouterState();
  const [embeddedLink, setEmbeddedLink] = useState(initialState.embeddedLink);
  const [selectedCard, setSelectedCard] = useState(initialState.productId);

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

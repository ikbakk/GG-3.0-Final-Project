export interface ContextProvider {
  children: React.ReactNode;
}

export interface ContextValue {
  embeddedLink: string;
  selectedCard: string;
  setEmbeddedLink: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>;
}

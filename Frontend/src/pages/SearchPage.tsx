import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "../../types";
import { useState } from "react";
import useSearch from "@/hooks/useSearch";
import SearchForm from "@/components/SearchPage/SearchForm";
import SearchResults from "@/components/SearchPage/SearchResult";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const endpoint = `products?title=${searchQuery}`;
  const { state, fetchData } = useSearch<Product>(endpoint);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
    setSearchQuery("");
  };

  return (
    <ScrollArea>
      <SearchForm
        onSubmit={(e) => handleSubmit(e)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {!state.isLoading && <SearchResults searchResults={state.data!} />}
    </ScrollArea>
  );
};

export default SearchPage;

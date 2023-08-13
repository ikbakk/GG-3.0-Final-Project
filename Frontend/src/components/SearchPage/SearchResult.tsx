import { Link } from "react-router-dom";
import { Product } from "../../../types";
import SearchCard from "./SearchCard";

interface SearchResultProps {
  searchResults: Product[];
}

const SearchResults = ({ searchResults }: SearchResultProps) => {
  return (
    <>
      <h2 className="text-center font-bold tracking-wider">
        Found {searchResults.length} products
      </h2>
      <div className="flex w-full flex-wrap justify-evenly gap-4 p-4">
        {searchResults.map((product) => (
          <Link
            key={product.id}
            to={`/detail/${product.videoID}`}
            state={{ productId: product.id, embeddedLink: product.urlProduct }}
          >
            <SearchCard
              title={product.title}
              price={product.price}
              urlProduct={product.urlProduct}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchResults;

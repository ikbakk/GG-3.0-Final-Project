import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  ...props
}: SearchFormProps) => {
  return (
    <form {...props} className="mx-auto my-4 flex w-1/2 gap-2">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search products"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;

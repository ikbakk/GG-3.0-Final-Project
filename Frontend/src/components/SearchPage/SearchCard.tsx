import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface SearchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  urlProduct: string;
}

const SearchCard = ({
  title,
  price,
  urlProduct,
  ...props
}: SearchCardProps) => {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return (
    <Card
      {...props}
      className="group duration-150 hover:cursor-pointer hover:border-primary hover:bg-black/40"
    >
      <CardHeader>
        <iframe className="h-full w-full" src={urlProduct} allowFullScreen />
      </CardHeader>
      <CardContent>
        <CardTitle className="group-hover:text-primary">{title}</CardTitle>
        <CardDescription className="group-hover:text-secondary-foreground">
          {IDR.format(price)}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SearchCard;

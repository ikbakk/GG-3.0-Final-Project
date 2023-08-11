import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
}

const ProductCard = ({ price, title, ...props }: ProductCardProps) => {
  return (
    <Card
      {...props}
      className="group w-60 duration-150 hover:cursor-pointer hover:bg-black/40"
    >
      <CardHeader className="h-full shrink-0 justify-between">
        <div className="flex h-full flex-col justify-end gap-2">
          <CardTitle className="line-clamp-2 capitalize text-secondary-foreground duration-150 group-hover:text-primary">
            {title}
          </CardTitle>
          <CardDescription className="duration-150 group-hover:text-secondary-foreground">
            Rp {price}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

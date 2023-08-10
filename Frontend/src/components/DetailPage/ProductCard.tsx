import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
}

const ProductCard = ({ price, title, ...props }: ProductCardProps) => {
  return (
    <Card {...props} className="hover:cursor-pointer">
      <CardHeader className="h-full shrink-0 justify-between">
        <div className="flex h-full flex-col justify-end">
          <CardTitle className="line-clamp-2 capitalize">{title}</CardTitle>
          <CardDescription>Rp {price}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

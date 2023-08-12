import { useContext } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MediaPlayerContext } from "@/contexts/MediaPlayeContext";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  id: string;
}

const ProductCard = ({ price, title, id, ...props }: ProductCardProps) => {
  const { selectedCard } = useContext(MediaPlayerContext);
  const selectedState = () => {
    if (selectedCard === id) {
      const cardBg = "bg-black/50";
      const titleColor = "text-primary";
      const priceColor = "text-secondary-foreground";
      return { cardBg, titleColor, priceColor };
    }
    const cardBg = "";
    const titleColor = "text-secondary-foreground";
    const priceColor = "";
    return { cardBg, titleColor, priceColor };
  };

  const className = selectedState();
  return (
    <Card
      {...props}
      className={`group w-60 duration-150 hover:cursor-pointer hover:bg-black/40 ${className.cardBg}`}
    >
      <CardHeader className="h-full shrink-0 justify-between">
        <div className="flex h-full flex-col justify-end gap-2">
          <CardTitle
            className={`line-clamp-2 capitalize text-secondary-foreground duration-150 group-hover:text-primary ${className.titleColor}`}
          >
            {title}
          </CardTitle>
          <CardDescription
            className={`duration-150 group-hover:text-secondary-foreground ${className.priceColor}`}
          >
            Rp {price}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

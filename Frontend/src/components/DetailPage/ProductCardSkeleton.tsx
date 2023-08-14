import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="w-60">
      <CardHeader className="gap-2">
        <Skeleton className="h-5 w-[80%]" />
        <Skeleton className="h-4 w-[40%]" />
      </CardHeader>
    </Card>
  );
};

export default ProductCardSkeleton;

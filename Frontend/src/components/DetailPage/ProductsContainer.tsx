import { Product } from "../../../types";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { useContext, useEffect } from "react";
import { MediaPlayerContext } from "@/contexts/MediaPlayeContext";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsContainer = () => {
  const params = useParams();
  const { data, isLoading } = useFetch<Product>(`products/${params.id}`);
  const { embeddedLink, selectedCard, setEmbeddedLink, setSelectedCard } =
    useContext(MediaPlayerContext);

  const handleSelectCard = (id: string, url: string) => {
    setEmbeddedLink(url);
    setSelectedCard(id);
  };

  useEffect(() => {
    if (data && !isLoading) {
      if (embeddedLink === "" && selectedCard === "") {
        setSelectedCard(data[0]?.id);
        setEmbeddedLink(data[0]?.urlProduct);
      }
    }
  }, [isLoading]);

  return (
    <div className="flex w-full flex-col gap-2 bg-accent p-4">
      <h2 className="text-xl font-semibold text-primary">Products</h2>
      <Separator className="my-2 bg-primary" />
      <ScrollArea className="relative h-full w-full">
        <div className="via-accent-50 absolute left-0 h-full w-2 bg-gradient-to-r from-accent to-accent/0"></div>
        <div className="via-accent-50 absolute right-0 h-full w-2 bg-gradient-to-l from-accent to-accent/0"></div>
        <div className="flex gap-2 px-2 pb-4">
          {isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            data?.map((item) => (
              <ProductCard
                onClick={() => handleSelectCard(item.id, item.urlProduct)}
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            ))
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductsContainer;

import { Product } from "../../../types";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";

const ProductsContainer = () => {
  const params = useParams();
  const { data } = useFetch<Product>(`products/${params.id}`);
  return (
    <div className="flex w-full shrink-0 overflow-hidden rounded-lg p-4 ">
      <div className="flex w-full gap-4 overflow-auto xl:justify-center">
        {data?.map((item) => (
          <ProductCard key={item.id} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;

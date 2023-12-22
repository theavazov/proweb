import { IProduct } from "../assets/interfaces";
import ProductCard from "./ProductCard";

interface ComponentProps {
  isLoading: boolean;
  search: string;
  products: IProduct[];
}

export default function Products({
  isLoading,
  products,
  search,
}: ComponentProps) {
  return (
    <section>
      {isLoading ? (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
          <div className="skeleton card"></div>
        </div>
      ) : (
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
          {products.length > 0
            ? products
                .filter(
                  (product) =>
                    product.title.toLowerCase().includes(search) ||
                    product.title.includes(search)
                )
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
            : null}
        </div>
      )}
    </section>
  );
}

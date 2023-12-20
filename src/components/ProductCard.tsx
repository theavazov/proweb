import { useContext } from "react";
import { star } from "../assets/icons";
import { IProduct } from "../assets/interfaces";
import { ModalContext } from "../store/modal";

export default function ProductCard({ product }: { product?: IProduct }) {
  const { setIsModal, setActiveProduct } = useContext(ModalContext);

  return (
    <div
      role="button"
      onClick={() => {
        setIsModal(true);
        setActiveProduct(product);
      }}
      className="card cursor-pointer border border-[#eeee] p-[12px] flex flex-col gap-[16px] transition duration-300 hover:shadow-lg"
    >
      <picture className="block relative w-full h-[160px] border border-[#eeee]">
        <img src={product?.thumbnail} alt={product?.title} className="image" />
      </picture>
      <div className="flex-auto flex flex-col justify-between gap-[8px]">
        <article className="flex flex-col gap-[16px]">
          <h5 className="font-bold text-black-800 text-center">
            {product?.title}
          </h5>
          <p className="line-clamp-2">{product?.description}</p>
        </article>
        <article className="flex items-center justify-between gap-[16px]">
          <span className="text-sm text-gray-500">Цена: {product?.price}$</span>
          <span className="flex items-center gap-[4px] text-sm text-yellow-500 font-bold">
            {star} {product?.rating}
          </span>
        </article>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { cart } from "../assets/icons";
import { CartContext } from "../store/cart";

export default function Header() {
  const [isCart, setIsCart] = useState(false);
  const { storedProducts } = useContext(CartContext);

  return (
    <header className="border-b border-[#eeee] fixed top-0 w-full bg-white z-20">
      <div className="container flex items-center justify-between py-[20px]">
        <span className="font-bold text-black-800 text-2xl">Proweb</span>
        <button className="relative" onClick={() => setIsCart(!isCart)}>
          {cart}
        </button>
      </div>
      {isCart ? (
        <div className="absolute top-[60px] w-full right-[-80px]">
          <div className="container flex justify-end items-end">
            <div className="bg-white border border-[#eeee] p-[8px] max-w-[200px] w-full flex flex-col shadow-md gap-[8px]">
              {storedProducts.length > 0 ? (
                storedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-[12px]"
                  >
                    <p className="text-sm">{product.title}</p>
                  </div>
                ))
              ) : (
                <span className="text-center text-sm text-gray-800">
                  Корзина пустой
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

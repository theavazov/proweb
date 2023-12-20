import React, { useEffect, useState } from "react";
import { ICartContext, IProduct } from "../assets/interfaces";

export const CartContext = React.createContext<ICartContext>({
  storedProducts: [],
  addCart: () => {},
  isFound: () => {},
});

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [storedProducts, setStoredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart != null) setStoredProducts(JSON.parse(cart));
  }, []);

  function addCart(product: IProduct) {
    const cart = localStorage.getItem("cart");
    const products = cart === null ? [] : JSON.parse(cart);
    products.push(product);
    setStoredProducts(products);
    localStorage.setItem("cart", JSON.stringify(products));
  }

  function isFound(id: number) {
    const storage = localStorage.getItem("cart");
    const cart = storage === null ? [] : JSON.parse(storage);
    let boolean = false;
    cart.map((storedProduct: IProduct) => {
      if (storedProduct.id === id) return (boolean = true);
    });
    return boolean;
  }

  return (
    <CartContext.Provider value={{ storedProducts, addCart, isFound }}>
      {children}
    </CartContext.Provider>
  );
}

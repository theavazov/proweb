import React, { useState } from "react";
import { IProduct } from "../assets/interfaces";

export const ModalContext = React.createContext<{
  isModal: boolean;
  setIsModal: Function;
  activeProduct: IProduct | null;
  setActiveProduct: Function;
}>({
  isModal: false,
  setIsModal: () => {},
  activeProduct: null,
  setActiveProduct: () => {},
});

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);

  return (
    <ModalContext.Provider
      value={{ isModal, setIsModal, activeProduct, setActiveProduct }}
    >
      {children}
    </ModalContext.Provider>
  );
}

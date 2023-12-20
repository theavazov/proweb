import { useContext, useEffect } from "react";
import { ModalContext } from "../store/modal";
import { CartContext } from "../store/cart";

export default function Modal() {
  const { setIsModal, activeProduct } = useContext(ModalContext);
  const { addCart, isFound } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target?.className === "modal") {
        setIsModal(false);
      } else if (target?.className === "modal_inner") {
        setIsModal(true);
      }
    });
  }, [setIsModal]);

  return (
    <div className="modal">
      <div className="modal-inner flex flex-col gap-[24px]">
        <p className="text-xl text-gray-800 text-center font-semibold">
          Вы хотите добавить это в корзину?
        </p>
        <div className="grid grid-cols-2 gap-[20px]">
          <button
            className="bg-blue-700 text-white p-2"
            onClick={() => {
              console.log(activeProduct && isFound(activeProduct.id));
              if (activeProduct && isFound(activeProduct.id)) setIsModal(false);
              else {
                addCart(activeProduct);
                setIsModal(false);
              }
            }}
          >
            Да
          </button>
          <button
            className="bg-red-600 text-white p-2"
            onClick={() => setIsModal(false)}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}

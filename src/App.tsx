// Components
import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "./assets/interfaces";
import { lupa } from "./assets/icons";
import Products from "./components/Products";
import { ModalContext } from "./store/modal";
import Modal from "./components/Modal";

async function getProducts() {
  const res = await fetch(import.meta.env.VITE_ENDPOINT);

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data;
}

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const { isModal } = useContext(ModalContext);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((res) => {
      setProducts(res.products);
      setIsLoading(false);
    });
  }, [search]);

  return (
    <div className="wrapper flex flex-col min-h-screen">
      <Header />
      <main className="flex-auto mt-[73px] flex flex-col gap-[24px] pt-[24px] pb-[40px]">
        <section>
          <div className="container flex flex-col items-center gap-[24px]">
            <h1 className="font-bold text-4xl text-black-800">
              Proweb - Тестовое задание
            </h1>
            <form className="flex border border-[#eeee] max-w-lg w-full">
              <input
                type="text"
                autoFocus
                className="flex-auto py-[8px] px-[16px] text-sm"
                placeholder="Поиск"
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
              <span className="cursor-pointer grid items-center px-[12px] bg-gray-50 border-l border-[#eeee]">
                {lupa}
              </span>
            </form>
          </div>
        </section>
        <Products isLoading={isLoading} products={products} search={search} />
      </main>
      {isModal ? <Modal /> : null}
    </div>
  );
}

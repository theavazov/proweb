import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import CartContextProvider from "./store/cart.tsx";
import ModalContextProvider from "./store/modal.tsx";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <CartContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </CartContextProvider>
);

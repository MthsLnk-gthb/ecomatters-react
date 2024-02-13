import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import React from "react";
import PlanosPage from "./Pages/PlanosPage/index";
import SobrePage from "./Pages/Sobre/index";
import TelaLoja from "./Pages/TelaLoja";
import TelaCarrinho from "./Pages/TelaCarrinho";
import { CarrinhoProvider } from "./Contexts/CarrinhoContext";
import TelaCompra from "./Pages/TelaCompra";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/planos",
    element: <PlanosPage />,
  },
  {
    path: "/sobre",
    element: <SobrePage />,
  },
  {
    path: "/loja",
    element: <TelaLoja />,
  },
  {
    path: "/carrinho",
    element: <TelaCarrinho />,
  },
  {
    path: "/compra",
    element: <TelaCompra />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarrinhoProvider>
      <RouterProvider router={router} />
    </CarrinhoProvider>
  </React.StrictMode>
);
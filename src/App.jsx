import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Rodape from "./comum/componentes/Rodape/Rodape";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Rodape/>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Principal.css";
import { FaChevronLeft } from "react-icons/fa6";
import Cabecalho from "../Cabecalho/Cabecalho";

function Principal({ voltarPara, titulo, children }) {
  return (
    <>
      <Cabecalho />
      <main className="principal_root">
        <div className="principal_titulo">
          {voltarPara && (
            <Link to={voltarPara}>
              <FaChevronLeft size={24} color="#949a9c" />
            </Link>
          )}

          {titulo}
        </div>

        {children}
      </main>
    </>
  );
}

export default Principal;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("user"));
    if (usuarioLogado) {
      setUser(usuarioLogado);
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <>
      <NavBarItem/>
        <div className="container mt-5">
            <div className="jumbotron">
              <h1 className="display-3 text-secondary"><strong>Católica Biblioteca</strong></h1>
              <h1 className="text-secondary">Seja Bem vindo {user.nome}</h1>
              <hr classNameName="my-4 text-secondary"/>
              <p className="text-secondary">Utilize nossa aplicação para maior comodidade</p>
            </div>
        </div>
    </>
  );
};

export default Home;


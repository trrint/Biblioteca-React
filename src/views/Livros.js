import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const ListarLivros = () => {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = async () => {
    try {
      const response = await axios.get("http://localhost:8080/livro"); 
      setLivros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editarLivro = (id) => {
    navigate(`/livros/editar/${id}`); 
  };

  const excluirLivro = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/livro/${id}`);
      alert("Livro excluído com sucesso!");
      carregarLivros(); 
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao excluir o livro. Por favor, tente novamente.");
    }
  };

  const navigateToCadastroLivro = () => {
    navigate("/livros/cadastrar"); 
  };

  return (
    <div>

    <NavBarItem />
      
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <h1>Lista de Livros</h1>
        <button className="btn btn-primary" onClick={navigateToCadastroLivro}>
          Cadastrar Livro
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>ISBN</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.nome}</td>
              <td>{livro.isbn}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => editarLivro(livro.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => excluirLivro(livro.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarLivros;

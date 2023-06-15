import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { messagemSucesso, messagemErro } from "../utils/toastr";
import NavBar from "./NavBar";

export default function Login(){

    const[login, setValues] = useState({})
    let navigate = useNavigate()

    function onChange(ev){
        const{name, value} = ev.target;
        setValues({...login, [name]:value})
    }

    function onSubmit() {
        console.log("Valores ", login);
    
        axios.post('http://localhost:8080/login', login)
          .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            messagemSucesso("Login efetuado com sucesso");
            navigate("/home");
          })
          .catch(erro => messagemErro("Login ou Senha Inválida"));
      }

    return(
    <div>
      <NavBar />
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card bg-white">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input data-cy="input-username"
                type="text" 
                class="form-control"
                name="usuario" 
                id="username" 
                onChange={onChange}
                placeholder="Enter username"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input data-cy="input-senha"
                type="password" 
                class="form-control" 
                name="senha"
                id="password" 
                onChange={onChange}
                placeholder="Enter password"/>
              </div>
              <p />
              <button type="button" 
              data-cy="btn-entrar"
              onClick={onSubmit}
              class="btn btn-success">Login</button> <a />
              <button type="reset" data-cy="btn-reset" className="btn btn-danger">Limpar</button>
              <p />
              <div>
                <h3 className="btn btn-info btn-block" role="button">Quero me Cadastrar</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    )
}
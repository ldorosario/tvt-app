import React, { useState } from "react";
import logo from "../logoTvT.png";
import "./login.css";

import { useNavigate } from "react-router-dom";

import { HttpStatusCode } from "axios";
import LoginApi from "../api/loginApi";

const loginApi = new LoginApi();
export default function LoginComponent() {
  const navigate = useNavigate();
  const [erroLogin, setErroLogin] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username: any = data.get("username");
    const password: any = data.get("password");

    try {
      const makeLogin = await loginApi.login(username, password);
      if (makeLogin.status === HttpStatusCode.Ok) {
        navigate("/user-assets");
      }
      if (makeLogin.status === HttpStatusCode.NoContent) {
        setErroLogin("Registro não encontrado, tente novamente.");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="login-page">
        <center>
          <img src={logo} className="logo" alt="" />
        </center>

        <div className="form">
          <p style={{ color: "red" }}>{erroLogin}</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Usuário" required />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
            />
            <button type="submit">Entrar</button>
            <p className="message">
              <a href="#" onClick={() => navigate("/new-user")}>
                Criar uma conta
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

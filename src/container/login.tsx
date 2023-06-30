import React, { useEffect, useState } from "react";
import logo from "../logoTvT.png";
import "./login.css";

import { useNavigate } from "react-router-dom";
import TokenStorage from "../tokenStorage/tokenStorage";

const tokenStorage = new TokenStorage();

export default function LoginComponent() {
  const navigate = useNavigate();
  const [erroLogin, setErroLogin] = useState("");

  function validateEntryToken() {
    if (tokenStorage.getTokenId() === tokenStorage.realToken()) {
      navigate("/dashboard");
    }
  }
  useEffect(() => {
    validateEntryToken();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let params = new URLSearchParams(document.location.search);
    let tokenId: any = params.get("tokenId");

    if (tokenId === tokenStorage.realToken()) {
      tokenStorage.setTokenId(tokenId);
      navigate("/dashboard");
    } else {
      setErroLogin("Token informado está expirado ou desabilitado.");
    }
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
            <button type="submit">Validar</button>
          </form>
        </div>
      </div>
    </>
  );
}

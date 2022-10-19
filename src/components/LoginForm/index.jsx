import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <h1 className="title">Acesse sua conta</h1>
          </div>
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <Input type="text" icon="email" />
          </div>
          <div className="row">
            <label>Senha</label>
          </div>
          <div className="row">
            <Input type="password" icon="lock" />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Login </Button>
          </div>
          <div className="row">
            <Link to={"/register"} replace={true}>
              <span className="form-link">Não possui uma conta?</span>
            </Link>
          </div>
          <div className="row">
            <a href="#abrirModal" className="teste">
              modal
            </a>
          </div>
        </form>
      </div>

      <div id="abrirModal" className="modal">
        <a href="#fechar" title="fechar" className="fechar">
          X
        </a>
        <div>
          <h2>teste modal</h2>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

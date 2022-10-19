import { useState } from "react";
import Button from "../Button";
import "./registerform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <h1 className="title">Crie sua conta</h1>
          </div>
          <div className="row">
            <label>Nome completo</label>
          </div>
          <div className="row">
            <Input type="text" icon="user" />
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
            <label>Confirme a senha</label>
          </div>
          <div className="row">
            <Input type="password" icon="lock" />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Concluir cadastro </Button>
          </div>
          <div className="row">
            <Link to={"/login"} replace={true}>
              <span className="form-link">Fazer login</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;

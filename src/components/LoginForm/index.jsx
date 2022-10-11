import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Input from "../Input";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <label className="w-90">Usuário</label>
          </div>
          <div className="row">
            <i className="input-icon">
              <FaUser />
            </i>
            <Input type="text" />
          </div>
          <div className="row">
            <label className="w-90">Senha</label>
          </div>
          <div className="row">
            <i className="input-icon">
              <FaLock />
            </i>
            <Input type="password" />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Login </Button>
          </div>
          <div className="row">
            <span className="register-link">
              <Link to={"/register"} replace={true}>
                Não possui uma conta?
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

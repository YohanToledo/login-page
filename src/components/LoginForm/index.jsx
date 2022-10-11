import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Form = () => {
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
            <input type="text" className="input-text font" />
          </div>
          <div className="row">
            <label className="w-90">Senha</label>
          </div>
          <div className="row">
            <i className="input-icon">
              <FaLock />
            </i>
            <input type="password" className="input-text font" />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Login </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

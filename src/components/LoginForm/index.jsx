import { useState } from "react";
import Button from "../Button";
import "./loginform.css";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="login-form" onSubmit={handleSubmit}>
        <form className="form">
          <div className="row">
            <label className="w-90">Usuário</label>
          </div>
          <div className="row">
            <input type="text" className="input-text font" />
          </div>
          <div className="row">
            <label className="w-90">Senha</label>
          </div>
          <div className="row">
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

import { useState } from "react";
import Button from "../Button";
import "./registerform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";
import { validateEmail, validatePassword } from "../../utils/validate";
import Api from "../../shared/requests/Api";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const error = {
    name: "nome deve conter no minimo 3 letras",
    email: "email invalido",
    password: "a senha precisa conter...",
    confirmPassword: "as senhas devem ser iguais",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);

    try {
      const api = new Api();
      api.register(name, email, password).then(() => {
        console.log("user created successfully");
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <h1 className="title">Crie sua conta</h1>
          </div>
          <div className="row">
            <label>Nome completo</label>
          </div>
          <div className="row">
            <Input
              type="text"
              icon="user"
              setValue={setName}
              errorMessage={error.name}
              required={true}
              pattern={"^[A-Za-z]{3,32}$"}
            />
          </div>
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <Input
              type="email"
              icon="email"
              setValue={setEmail}
              errorMessage={error.email}
              required={true}
            />
          </div>
          <div className="row">
            <label>Senha</label>
          </div>
          <div className="row">
            <Input
              type="password"
              icon="lock"
              setValue={setPassword}
              errorMessage={error.password}
              required={true}
              pattern={
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
              }
            />
          </div>
          <div className="row">
            <label>Confirme a senha</label>
          </div>
          <div className="row">
            <Input
              type="password"
              icon="lock"
              setValue={setConfirmPassword}
              errorMessage={error.confirmPassword}
              required={true}
              //TO-DO: validate passwords using js function
              pattern={password}
            />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Concluir cadastro </Button>
          </div>
          <div className="row">
            <Link to={"/login"} replace={true}>
              <span className="form-link">
                Já possui cadastro? Faça o login já!
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;

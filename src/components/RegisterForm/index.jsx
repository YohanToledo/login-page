import { useState } from "react";
import Button from "../Button";
import "./registerform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";
import { validatePassword } from "../../utils/validate";
import Api from "../../shared/requests/Api";
import Modal from "../Modal";

const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("As senhas devem ser iguais!");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const error = {
    name: "O nome deve conter no minimo 3 letras",
    email: "Formato de email inválido",
    password:
      "A senha deve conter no mínimo 8 caracteres e incluir letra maiúscula, minúscula, números e caracteres especiais.",
    confirmPassword: "Campo obrigatorio",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validateData()) {
      const api = new Api();
      api
        .register(name, email, password)
        .then((res) => {
          console.log(res);
          if (res.status === 400) {
            setModalMsg("Email já cadastrado!");
            setShowModal(true);
          }
        })
        .catch((err) => {
          console.log(err);

          setModalMsg("Erro interno! Contate o Suporte!");
          setShowModal(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      setShowModal(true);
    }
  };

  const validateData = () => {
    const validPass = validatePassword(password, confirmPassword);

    return validPass;
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

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        msg={modalMsg}
      />
    </>
  );
};

export default RegisterForm;

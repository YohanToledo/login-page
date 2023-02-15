import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";
import Api from "../../shared/requests/Api";
import Modal from "../Modal";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setIsLoading(!isLoading);

    try {
      const api = new Api();
      api.login(email, password).then(() => {
        console.log("successfully logged in");
      });
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <h1 className="title">Acesse sua conta</h1>
          </div>
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <Input type="text" icon="email" setValue={setEmail} />
          </div>
          <div className="row">
            <label>Senha</label>
          </div>
          <div className="row">
            <Input type="password" icon="lock" setValue={setPassword} />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Login </Button>
          </div>
          <div className="row">
            <Link to={"/register"} replace={true}>
              <span className="form-link">
                Não possui uma conta? Cadastre-se já!
              </span>
            </Link>
          </div>

          {error ? <div>Invalid Credentials</div> : <></>}
        </form>
      </div>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        msg={"Email ou Senha Inválidos!"}
      />
    </>
  );
};

export default LoginForm;

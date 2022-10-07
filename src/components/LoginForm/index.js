import "./loginform.css";

const Form = () => {
  return (
    <>
      <div className="login-form">
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
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

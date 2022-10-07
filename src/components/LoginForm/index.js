import "./loginform.css";

const Form = () => {
  return (
    <>
      <div className="login-form">
        <form className="form">
          <label>Username</label>
          <input type="text" className="input-text" />

          <label>Senha</label>
          <input type="password" className="input-text" />

          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Form;

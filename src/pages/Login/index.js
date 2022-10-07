import Form from "../../components/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="page">
        <div className="left-column"></div>
        <div className="right-column">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Login;

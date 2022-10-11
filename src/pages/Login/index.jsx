import Form from "../../components/LoginForm";
import "./login.css";
import { BsGraphUp } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <div className="page">
        <div className="left-column">
          <div className="icon">
            <BsGraphUp />
          </div>
        </div>
        <div className="right-column">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Login;

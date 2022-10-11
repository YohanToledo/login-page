import Form from "../../components/LoginForm";
import "./login.css";
import { BsGraphUp } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { MdAutoGraph } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className="page">
        <div className="left-column">
          <div className="icon">
            <BsGraphUp />
          </div>
          <div className="icon">
            <GoGraph />
          </div>
          <div className="icon">
            <VscGraph />
          </div>
          <div className="icon">
            <MdAutoGraph />
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

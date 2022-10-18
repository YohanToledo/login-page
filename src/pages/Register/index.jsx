import "./register.css";
import { BsGraphUp } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { MdAutoGraph } from "react-icons/md";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <>
      <div className="left-column">
        <div className="icons-panel">
          <div className="left-icons">
            <div className="icon">
              <BsGraphUp />
            </div>
            <div className="icon">
              <GoGraph />
            </div>
          </div>
          <div className="right-icons">
            <div className="icon">
              <VscGraph />
            </div>
            <div className="icon">
              <MdAutoGraph />
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;

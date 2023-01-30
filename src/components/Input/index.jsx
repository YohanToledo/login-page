import "./input.css";

import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Input = ({ type, icon, setValue }) => {
  return (
    <>
      <i className="input-icon">
        {icon === "email" ? (
          <MdMail />
        ) : icon === "user" ? (
          <FaUser />
        ) : (
          icon === "lock" && <FaLock />
        )}
      </i>
      <input
        type={type}
        className="input-text font"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default Input;

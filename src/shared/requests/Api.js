import axios from "axios";

class Api {
  constructor() {
    this.BASE_URL = process.env.REACT_APP_BACKEND_URL;
  }

  login = async (email, password) => {
    let result = false;
    axios
      .post(`${this.BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        window.localStorage.setItem("coinomy_token", res.data.token);
        result = true;
      })
      .catch((err) => {
        console.log(err);
      });

    return result;
  };

  register = async (name, email, password) => {
    let result = false;
    axios
      .post(`${this.BASE_URL}/users`, {
        name,
        email,
        password,
      })
      .then(() => {
        result = true;
      })
      .catch((err) => {
        console.log(err);
      });

    return result;
  };
}

export default Api;

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
    let result;

    try {
      result = await axios
        .post(`${this.BASE_URL}/users`, {
          fullName: name,
          email,
          password,
        })

      console.log(result)
    }
    catch (e) {
      // console.log(e.response)
      return e.response
    }

    return result;
  };
}

export default Api;

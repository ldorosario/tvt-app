import axios from "axios";

export default class LoginApi {
  async login(username: string, password: string) {
    const response = await axios.get(
      "http://localhost:8080/login?username=" +
        username +
        "&password=" +
        password
    );
    return response;
  }

  async createLogin(newLoginObject: any) {
    const postNewUser = await axios.post(
      "http://localhost:8080/login",
      newLoginObject
    );
    return postNewUser;
  }
}

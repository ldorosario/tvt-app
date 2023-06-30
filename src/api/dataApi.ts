import axios from "axios";

export default class LoginApi {
  async login() {
    const response = await axios.get(
      "https://649df19d9bac4a8e669e78db.mockapi.io/api/users"
    );
    return response;
  }
}

import axios from "axios";

class AuthService {
    login(data) {
        return axios.post("http://localhost:5017/api/Auth/Login", data);
    }


}

export default new AuthService();
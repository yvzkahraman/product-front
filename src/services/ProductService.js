import axios from "axios";

class ProductService {
    getAll() {
        return axios.get("http://localhost:5017/api/Products");
    }
    update(data) {
        return axios.put("http://localhost:5017/api/Products", data)
    }
    remove(id) {
        return axios.delete(`http://localhost:5017/api/Products/${id}`);
    }
    create(data) {
        return axios.post("http://localhost:5017/api/Products", data);
    }

}

export default new ProductService();
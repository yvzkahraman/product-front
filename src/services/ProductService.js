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

}

export default new ProductService();
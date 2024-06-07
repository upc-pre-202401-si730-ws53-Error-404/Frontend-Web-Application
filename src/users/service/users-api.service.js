import http from "../../shared/services/http-common.js";

export class ProductsApiService {
    getAllUsers() {
        return http.get("/users/users");
    }
    getAllSubscriptions(){
        return http.get("/users/subscriptions")
    }
}

import http from "../../shared/services/http-common.js";

export class CaresApiService {
    getAll() {
        return http.get("/cares");
    }
}
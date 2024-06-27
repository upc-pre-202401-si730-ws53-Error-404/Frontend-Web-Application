import http from "../../shared/services/http-common.js";

export class PestsApiService {
    getAll() {
        return http.get("/crops/pests");
    }

    getById(){
        return http.get(`/crops/pests/${id}`);
    }
}
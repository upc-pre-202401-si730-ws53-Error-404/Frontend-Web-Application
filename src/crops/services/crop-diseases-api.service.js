import http from "../../shared/services/http-common.js";

export class CropDiseasesApiService {
    getAll() {
        return http.get("crops/diseases");
    }

    getByCropId(id){
        return http.get(`crops/${id}/diseases`);
    }
}
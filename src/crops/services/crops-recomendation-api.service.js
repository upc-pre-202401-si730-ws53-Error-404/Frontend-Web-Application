import http from "/src/shared/services/http-common.js";

export class CropsRecomendationApiService {

    getAllCrops(){
        return http.get('/crops')
    }

    getCropById(id){
        return http.get(`/crops/${id}`)
    }
}


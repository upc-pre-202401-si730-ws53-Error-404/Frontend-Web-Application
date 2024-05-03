
import http from "../../shared/services/http-common.js";

export class StatisticsApiService {

    getAllSowings(){
        return http.get('/crops/sowings')
    }

    getAllControls(){
        return http.get('/crops/controls')
    }
}
import axios from "axios";

import http from "../../../shared/services/http-common.js";


export class StatisticsApiService {

    getAllSowings(){
        return http.get('/sowings')
    }

    getAllCrops() {
        return http.get('/crops');
    }

}
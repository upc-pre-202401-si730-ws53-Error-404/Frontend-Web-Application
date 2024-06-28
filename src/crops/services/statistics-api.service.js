
import http from "../../shared/services/http-common.js";

export class StatisticsApiService {

    getAllSowings(status){
        console.log(status);
        return http.get(`/crops-management/sowings?status=${status}`);
    }

}


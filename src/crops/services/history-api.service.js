import http from "../../shared/services/http-common.js";

export class HistoryApiService {
    addToHistory(data){
        return http.post('/history', data)
    }
}
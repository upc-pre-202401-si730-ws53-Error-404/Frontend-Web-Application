import axios from "axios";

import http from "../../../shared/services/http-common.js";


export class CropApiService {

    getAll() {
        return http.get('/crops');
    }
}
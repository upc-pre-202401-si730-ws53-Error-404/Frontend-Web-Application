import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/crops'
});

export class CropApiService {

    getAllCrops() {
        return http.get(); //Obtiene todos los cultivos
    }x
}
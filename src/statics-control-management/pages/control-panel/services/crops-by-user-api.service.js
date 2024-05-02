import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/RobertoJuarez'
});

export class CropsByUserApiService {

    getAllCrops() {
        return http.get(); //Obtiene todos los cultivos de RobertoJuarez
    }
}
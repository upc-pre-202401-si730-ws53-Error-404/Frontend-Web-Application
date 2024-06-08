import http from "../../shared/services/http-common.js";

export class UsersApiService {

   getAll(){
        return http.get("/users/subscriptions")
    }
}

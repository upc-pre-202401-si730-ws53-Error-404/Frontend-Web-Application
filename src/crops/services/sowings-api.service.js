import http from "../../shared/services/http-common.js";

export class SowingsApiService{

    getAll(){
        return http.get("/sowings");
    }
    getAllFalse(){
        return http.get("/sowings/?status=false");

    }
    getById(id) {
        return http.get(`/crops/sowings/${id}`);
    }
    //This call to method POST at /sowings
    create(sowingResource) {
        return http.post('/sowings', sowingResource);
    }

    update(id, tutorialResource) {
        return http.put(`/sowings/${id}`, tutorialResource);
    }

    delete(id) {
        console.log('Sending delete request for sowing with ID:', id);

        return http.delete(`/sowings/${id}`)
            .then((response) => {
                console.log('Delete request successful:', response);
                return response;
            })
            .catch((error) => {
                console.error('Error in delete request:', error);
                throw error;
            });
    }

    findByTitle(title) {
        return http.get(`/crops/sowings?title=${title}`);
    }
}
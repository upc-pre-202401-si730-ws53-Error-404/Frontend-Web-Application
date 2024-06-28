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
    create(sowingResource) {
        return http.post('/sowings', sowingResource);
    }

    update(id, tutorialResource) {
        return http.put(`/sowings/${id}`, tutorialResource);
    }

    updateSowing(sowing){
        return new Promise((resolve,reject) =>{
            http.put(`/sowings/${sowing.id}`, sowing)
                .then(response => {
                    console.log('Update request successful:', response);
                    resolve(response);
                })
                .catch(error => {
                    console.error('Error in update request:', error);
                    reject(error);
                });
        });
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
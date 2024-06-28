import http from "../../shared/services/http-common.js";

export class ControlsApiService {
    getControlById(sowingId, controlId) {
        return http.get(`sowings/${sowingId}/controls/${controlId}`);
    }

    getAllControlsBySowingId(sowingId) {
        return http.get(`sowings/${sowingId}/controls`);
    }

    deleteControl(sowingId, controlId) {
        return http.delete(`sowings/${sowingId}/controls/${controlId}`);
    }

    getAllControls() {
        return http.get(`controls`);
    }

    createControl(sowingId, control) {
        return http.post(`sowings/${sowingId}/controls`, control);
    }

    updateControl(sowingId, controlId, control) {
        return http.put(`sowings/${sowingId}/controls/${controlId}`, control);
    }
}
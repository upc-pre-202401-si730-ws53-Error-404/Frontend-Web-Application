import http from "../../shared/services/http-common.js";

export class ProductsApiService {
    getAll() {
        return http.get("/crops/products");
    }

    /**
     * Method to get products by sowing id
     * @param sowingId
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProductsBySowingId(sowingId) {
        return http.get(`/sowings/` + sowingId + `/products`);
    }

    /**
     * Method to add a product to a sowing
     * @param sowingId
     * @param body
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    addProduct(sowingId, body) {
        return http.post('/sowings/' + sowingId  + '/products', body);
    }

    getAllProducts() {
        return http.get('/products');
    }

    postProduct(body) {
        return http.post('/products', body);
    }

    getProductBySowingInfo(sowingId, productId) {
        return http.get(`/sowings/${sowingId}/products/${productId}`);
    }

    deleteProductBySowing(sowingId, productId) {
        return http.delete(`/sowings/${sowingId}/products/${productId}`);
    }
}

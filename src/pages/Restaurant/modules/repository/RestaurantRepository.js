import {NoAuthAjax} from 'Api/Ajax';

class RestaurantRepository {
    URL = "/restaurants";

    constructor(props) {
        Object.assign(this, props);
    }

    findAll(page) {
        return NoAuthAjax.get(this.URL + "?page=" + page);
    }
}

// 싱글톤으로 리턴
export default new RestaurantRepository();
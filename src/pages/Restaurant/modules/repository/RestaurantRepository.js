import {NoAuthAjax} from 'Api/Ajax';

class RestaurantRepository {
    URL = "/restaurants";

    constructor(props) {
        Object.assign(this, props);
    }

    findAll() {
        return NoAuthAjax.get(this.URL);
    }
}

// 싱글톤으로 리턴
export default new RestaurantRepository();
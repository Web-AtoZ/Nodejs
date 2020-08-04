import {observable, action, set} from "mobx";
import {autobind} from 'core-decorators';

@autobind
class Restaurant {
    @observable restaurant_id;
    @observable name = '';
    @observable address = '';
    @observable lng;
    @observable lat;
    @observable option_id;
    @observable board_id;
    @observable road_address;
    @observable option_name;
    @observable phone;
    @observable mapx;
    @observable mapy;
    @observable created_date;
    @observable updated_date;
    @observable deleted_date;


    constructor(data) {
        set(this, data);
    }

    get name() {
        return this.name;
    }

    get restaurantId() {
        return this.restaurant_id;
    }
}

export default Restaurant;
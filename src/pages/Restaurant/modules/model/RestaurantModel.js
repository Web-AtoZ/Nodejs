import { extendObservable, computed, action } from "mobx";
import {autobind} from 'core-decorators';

@autobind
class RestaurantModel {
    constructor(data) {
        extendObservable(this, data);
    }

    @computed
    get restaurantId() {
        return this.restaurant_id;
    }
}

export default RestaurantModel;
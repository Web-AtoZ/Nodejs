import {observable, action} from "mobx";
import RestaurantRepository from '../repository/RestaurantRepository';
import RestaurantModel from '../model/RestaurantModel';
import Restaurant from '../model/Restaurant';
import {autobind} from 'core-decorators';

@autobind
class RestaurantStore {
    @observable restaurantList = [];
    @observable restaurant = new Restaurant();

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // 비동기인 경우 @action 대신 @asyncAction
    @action
    async findAll() {
        const {data, status} = await RestaurantRepository.findAll()
            , {_embedded: {restaurants}} = data;

        if (status === 200) this.restaurantList = restaurants.map(
            restaurant => {
                console.log("여긴")
                console.log(restaurant)
                new RestaurantModel(restaurant)
            });
        console.log("여기가 왜 undefined로 넘어오지")
        console.log(this.restaurantList)
    }
}

export default RestaurantStore;
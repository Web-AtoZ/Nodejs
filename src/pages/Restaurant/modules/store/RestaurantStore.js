import {observable, action} from "mobx";
import RestaurantRepository from '../repository/RestaurantRepository';
import RestaurantModel from '../model/RestaurantModel';
import Restaurant from '../model/Restaurant';
import {autobind} from 'core-decorators';

@autobind
class RestaurantStore {
    @observable restaurantList = [];
    @observable restaurant = new Restaurant();
    @observable page = 0;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // 더보기 클릭 시
    @action
    loadMore = () => {
        this.page++;
        this.findAll(this.page)
    }

    // 비동기인 경우 @action 대신 @asyncAction
    @action
    async findAll(page=0) {
        const {data, status} = await RestaurantRepository.findAll(page)
            , {_embedded: {restaurants}} = data;

        if (status === 200) {
            let temp = restaurants.map(restaurant => {
                return new RestaurantModel(restaurant)
            });

            this.restaurantList = this.restaurantList.concat(temp)

        }
    }
}

export default RestaurantStore;
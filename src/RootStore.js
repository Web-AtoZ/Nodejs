import BoardStore from "pages/Board/modules/store/BoardStore";
import RestaurantStore from "pages/Restaurant/modules/store/RestaurantStore";

class RootStore {
    constructor() {
        this.boardStore = new BoardStore(this);
        this.restaurantStore = new RestaurantStore(this);
    }   
}

export default RootStore;
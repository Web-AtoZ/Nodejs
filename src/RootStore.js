import BoardStore from 'pages/Board/modules/store/BoardStore';
import RestaurantStore from 'pages/Restaurant/modules/store/RestaurantStore';
import NaverApiStore from 'pages/NaverApi/modules/store/NaverApiStore';
class RootStore {
	constructor() {
		this.boardStore = new BoardStore(this);
		this.restaurantStore = new RestaurantStore(this);
		this.naverApiStore = new NaverApiStore(this);
	}
}

export default RootStore;

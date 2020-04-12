import BoardStore from "pages/Board/modules/store/BoardStore";

class RootStore {
    constructor() {
        this.boardStore = new BoardStore(this);
    }   
}

export default RootStore;
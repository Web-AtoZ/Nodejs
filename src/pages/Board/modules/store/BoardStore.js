import { observable, action, computed, asyncAction } from "mobx";
import boardRepository from '../repository/BoardRepository';
import BoardModel from '../model/BoardModel';

class BoardStore {
    @observable
    boardList = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // 비동기인 경우 @action 대신 @asyncAction
    @action
    async findAll() {
        const {data, status} = await boardRepository.findAll();
            
        if(status === 200) 
            this.boardList = data.map(board => new BoardModel());
    }

    // @action
    // removeBoard(index) {
    //     this.boardList.splice(index, 1)
    // }

    // @computed
    // get activeBoards() {
    //     return this.boardList.filter(board => board.isActive)
    // }
}

export default BoardStore;
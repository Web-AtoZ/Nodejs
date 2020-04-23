import { observable, action } from "mobx";
import boardRepository from '../repository/BoardRepository';
import BoardModel from '../model/BoardModel';
import Board from '../model/Board';
import {autobind} from 'core-decorators';

@autobind
class BoardStore {
    @observable
    boardList  = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    // 비동기인 경우 @action 대신 @asyncAction
    @action
    async findAll() {
        const {data, status} = await boardRepository.findAll()
        , {boards} = data;

        if(status === 200) this.boardList = boards.map(board => new BoardModel(board));
    }
    
    @action
    async save(board) {
        const param = new Board(board);
        console.log(param);
        const {data, status} = await boardRepository.save(param);
        
        if(status === 200) this.boardList = [...this.boardList, param];
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
import {observable, action, set } from "mobx";
import {autobind} from 'core-decorators';

@autobind
class Board {
    @observable board_id;
    @observable title;
    @observable content;
    @observable view = 0;
    @observable user_id;
    @observable option_id;
    @observable created_date;
    @observable updated_date;
    @observable deleted_date;

    constructor(data) {
      set(this, data);
    }

    get title() {
        return this.title;
    }

    @action
    changeBoardTitle(title) {
        this.title = title;
    }
}

export default Board;
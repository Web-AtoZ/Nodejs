import {NoAuthAjax} from 'Api/Ajax';

class BoardRepository {
    URL = "/boards";

    constructor(props) {
        Object.assign(this, props);
    }

    findAll() {
        return NoAuthAjax.get(this.URL);
    }

    findById(id) {
        //return NoAuthAjax.get(`${this.URL}/${id}`);
    }

    save(boardModel) {
        return NoAuthAjax.post(this.URL, boardModel);
    }
}

// 싱글톤으로 리턴
export default new BoardRepository();
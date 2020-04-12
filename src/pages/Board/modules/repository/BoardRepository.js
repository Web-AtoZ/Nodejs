import {NoAuthAjax} from 'Api/Ajax';

class BoardRepository {
    URL = "/boards";

    constructor(props) {
        Object.assign(this, props);
    }

    findAll() {
        return NoAuthAjax.get(this.URL);
    }
}

// 싱글톤으로 리턴
export default new BoardRepository();
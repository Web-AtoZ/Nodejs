import { extendObservable, computed, action } from "mobx";
import {autobind} from 'core-decorators';

@autobind
class BoardModel {
    constructor(data) {
        // Object.assign 처럼 property와 값을 Target 오브젝트에 합쳐 주는데 
        // 관찰 가능한(Rerendering 대상이 되는 값으로 만들어 추가해준다) Property로 만들어 추가
        //  합치려는 객체의 Property가 이미 선언 되어 있는 경우는 사용 할 수 없기 때문에 그런경우는 Mobx에서 제공하는 set api를 사용
        extendObservable(this, data);
    }

    @computed
    get titles() {
        return this.title;
    }

    @action
    changeBoardTitle(title) {
        this.title = title;
    }

    isActive() {
        return this.status = 'ACTIVE';
    }
}

export default BoardModel;

// class BoardModel {
//     @observable
//     title;

//     constructor(data) {
//       set(this, data);
//     }

//     @action
    
//     get title() {
//         return this.title;
//     }

//     @action
//     changeBoardTitle(title) {
//         this.title = title;
//     }
// }

// export default BoardModel;
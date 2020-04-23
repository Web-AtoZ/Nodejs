import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import BoardTemplate from 'pages/Board/templates/BoardTemplate';

const BoardContainer = observer(() => {
    // 함수형에서 @inject 같은 역할
    const {boardStore:{findAll, boardList}} = useStores();

    // ComponentDidMount() 역할
    useEffect(() => {
        findAll().catch(e => console.log(e.message));
    /* eslint-disable */
    }, [])

    return(<BoardTemplate boardList={boardList} />);
})

export default BoardContainer;

// export default inject(({boardStore}) => ({
//     findAll : boardStore.findAll,
//     boardList : boardStore.boardList
// }))(observer(BoardContainer));

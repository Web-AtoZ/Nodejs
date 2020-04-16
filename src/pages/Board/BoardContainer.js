import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import BoardTemplate from 'pages/Board/templates/BoardTemplate';

const BoardContainer = observer(() => {
    const {boardStore:{findAll, boardList}} = useStores();

    useEffect(() => {
        findAll();
    /* eslint-disable */
    }, [])

    return(<BoardTemplate boardList={boardList} />);
})

export default BoardContainer;

// export default inject(({boardStore}) => ({
//     findAll : boardStore.findAll,
//     boardList : boardStore.boardList

// }))(observer(BoardContainer));

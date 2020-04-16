import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import BoardDetailTemplate from 'pages/Board/templates/BoardDetailTemplate';

const BoardDetailContainer = observer(() => {
    const {boardStore:{boardList}} = useStores();

    useEffect(() => {
        
    /* eslint-disable */
    }, [])

    return(<BoardDetailTemplate boardList={boardList} />);
})

export default BoardDetailContainer;
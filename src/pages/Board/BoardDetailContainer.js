import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import useStores from 'useStores';
import BoardDetailTemplate from 'pages/Board/templates/BoardDetailTemplate';
import {useParams} from 'react-router-dom';

const BoardDetailContainer = observer(() => {
    const {boardStore:{board, getBoard}} = useStores();
    const params = useParams();
    
    useEffect(() => {
        getBoard(params.id);
    /* eslint-disable */
    }, [params.id])
    console.log("ttttttttttttttt",board);
    return (<BoardDetailTemplate board={board} />);
})

export default BoardDetailContainer;
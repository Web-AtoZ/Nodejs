import React, {useEffect} from 'react';
import {inject,observer} from 'mobx-react';

const BoardContainer = ({boardList, findAll}) => {
    useEffect(() => {
        findAll();

    }, [])
    return(
        <h1>{boardList}</h1>
    );
}

export default inject(({boardStore}) => ({
    findAll : boardStore.findAll,
    boardList : boardStore.boardList

}))(observer(BoardContainer));

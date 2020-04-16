import React from 'react';
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import BoardListTable from 'common/components/organisms/Board/BoardListTable';
import BoardAddButton from 'common/components/organisms/Board/BoardAddButton';

export default observer(function BoardTemplate({boardList}) {
  return (
    <Grid item xs={10}>
      <BoardAddButton/>
      <BoardListTable data={boardList}/>
    </Grid>
  );
});


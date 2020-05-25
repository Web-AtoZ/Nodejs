import React from 'react';
import Grid from '@material-ui/core/Grid';
import {observer} from 'mobx-react';
import BoardListTable from 'common/components/organisms/Board/BoardListTable';
import BoardAddButton from 'common/components/organisms/Board/BoardAddButton';
import Button from 'common/components/atoms/Button/Button';
export default observer(function BoardTemplate({boardList}) {
  return (
    <Grid item xs={10}>
      <BoardAddButton/>
      <Button>test</Button>
      <BoardListTable data={boardList}/>
    </Grid>
  );
});


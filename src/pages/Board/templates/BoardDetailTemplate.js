import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoardDetail from 'common/components/organisms/Board/BoardDetail';

const BoardDetailTemplate = ({board}) => {
  return(
      <Grid item xs={7}>
        <BoardDetail board={board}/>
     </Grid>
  );
}

export default BoardDetailTemplate;
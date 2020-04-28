import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoardDetail from 'common/components/organisms/Board/BoardDetail';


const BoardDetailTemplate = () => {
  return(
      <Grid item xs={7}>
        <BoardDetail/>
     </Grid>
  );
}

export default BoardDetailTemplate;
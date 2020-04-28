import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoardDetailContainer from 'common/components/organisms/Board/BoardDetailContainer';


const BoardDetailTemplate = () => {
  return(
      <Grid item xs={7}>
        <BoardDetailContainer/>
     </Grid>
  );
}

export default BoardDetailTemplate;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import BoardFormContainer from 'cocommon/components/organisms/Board/BoardFormContainer


const BoardDetailTemplate = () => {
  return(
      <Grid item xs={7}>
        <BoardFormContainer/>
     </Grid>
  );
}

export default BoardDetailTemplate;
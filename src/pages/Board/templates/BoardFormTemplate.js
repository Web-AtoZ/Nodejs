import React from 'react';
import BoardForm from 'common/components/organisms/Board/BoardForm';
import Grid from '@material-ui/core/Grid';

const BoardFormTemplate = () => {
  return(
    <Grid item xs={7}>
      <BoardForm/>
    </Grid>
  );
}

export default BoardFormTemplate;
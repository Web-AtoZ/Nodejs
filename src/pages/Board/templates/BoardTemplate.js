import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Board from 'common/components/organisms/Board';


export default function BoardTemplate() {
  return (
    <Grid item xs={10}>
      <Board/>
    </Grid>
  );
}


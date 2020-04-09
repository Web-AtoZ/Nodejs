import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Header = () => {
  const classes = useStyles();
  return(
    <Grid item xs={12}>
      <Paper className={classes.paper}>Header</Paper>
    </Grid>
  );
} 

export default Header;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
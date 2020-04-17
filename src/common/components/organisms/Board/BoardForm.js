import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import {observer} from 'mobx-react';
import useStores from 'useStores';

const BoardForm = observer(() => {
  const [value, setValue] = useState('');
  const {boardStore:{save}} = useStores();
  const {register, handleSubmit, errors} =useForm();

  const onSubmit = data => {
    const form = {...data, content:value}
    save(form);
  }

  return(
    <Grid direction="column" xs="6">
        <TextField
          id="standard-full-width"
          label="Title"
          InputLabelProps={{shrink: true}}
          name='title'
          style={{ margin: 8 }}
          placeholder="제목"
          fullWidth
          margin="normal"
          inputRef={register({required: true})}
          error={errors.title ? true : false}
          helperText={errors.title ? "Required title" : ""}
      />
      <ReactQuill name='content' theme="snow" value={value} onChange={setValue}/>
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>제출</Button>
    </Grid>
  );
})

export default BoardForm;
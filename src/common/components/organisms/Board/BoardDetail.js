import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'react-quill/dist/quill.snow.css';
import 'Util/css/quill.css'
import ReactQuill from 'react-quill';
import {observer} from 'mobx-react'
const BoardDetail = observer(({board}) => {
  return (
    <>
      <TextField
        id="standard-read-only-input"
        label="Title"
        name='title'
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        value={board.title}
        InputProps={{
          readOnly: true,
        }}
      />
      <ReactQuill name='content' theme="bubble" value={board.content} readOnly/>
    </>
  );
})

export default BoardDetail;
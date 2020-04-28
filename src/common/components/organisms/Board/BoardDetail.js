import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import 'react-quill/dist/quill.snow.css';
import 'Util/css/quill.css'
import useStores from 'useStores';
import ReactQuill from 'react-quill';
import {observer} from 'mobx-react';
import BoardNav from './BoardNav';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import {useParams} from 'react-router-dom';

const BoardDetail = observer(() => {
  const {boardStore:{board, update}} = useStores();
  const {register, handleSubmit, errors} =useForm();
  const params = useParams();  
  const [isWrite, changeMode] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(()=>{
    setTitle(board.title);
    setContent(board.content);
  },[board])

  const updateMode = () => {
    changeMode(!isWrite);
  }
  const deleteBoard= () => {
    console.log('hello');
  }
  
  const onUpdate = data => {
    const form = {...data, content: content}
    update(params.id, form)
      .then(changeMode(false))
      .catch(e=>console.log(e.message));
  }

  return (
    <>
      <BoardNav onClickUpdate={updateMode} onClickDelete={deleteBoard}/>
      <TextField
        id="standard-title-input"
        label="Title"
        name='title'
        fullWidth
        margin="normal"
        value={title}
        inputRef={register({required: true})}
        InputProps={isWrite ? null : {readOnly: true,}}
        onChange={({target:{value}})=> setTitle(value)}
      />
      <input type='hidden' name='user_id' ref={register({required:true})} value={1}/>
      <input type='hidden' name='option_id' ref={register({required:true})} value={1}/>
      {isWrite ? <>
                  <ReactQuill name='content' theme="snow" value={content} onChange={setContent}/>
                  <Button variant="contained" color="primary" onClick={handleSubmit(onUpdate)}>제출</Button>
                </>
                : <ReactQuill name='content' theme="bubble" value={content} readOnly/>
      }
    </>
  );
})

export default BoardDetail;
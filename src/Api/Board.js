import {NoAuthAjax} from './Ajax';

async function getBoards() {
  let response;

  try {
    response = await NoAuthAjax.get('/v1/boards');
    //  + stringify(params)
  } catch (e) {
    if (e.response.data.message) {
      throw e.response.data.message;
    } else {
      throw e.message;
    }
  }

  return response.data.data;
}

export default {
  getBoards,
}
import {NoAuthAjax} from './Ajax';

async function getBoard() {
  let response;

  // const params = {
  //   offset: !!offset ? offset : 0,
  //   limit: !!limit ? limit : 100,
  //   from_date: from_date,
  //   to_date: to_date,
  // };
  
  try {
    response = await NoAuthAjax.get('/v1/board');
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
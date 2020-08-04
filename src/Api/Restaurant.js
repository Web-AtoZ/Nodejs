import {NoAuthAjax} from './Ajax';

async function getRestaurants() {
  let response;

  try {
    response = await NoAuthAjax.get('/restaurants');
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
  getRestaurants,
}
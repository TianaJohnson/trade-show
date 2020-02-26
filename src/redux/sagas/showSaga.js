import axios from 'axios';
import { takeLatest,put } from 'redux-saga/effects';

function* addShow(action) {
    try {
      const add = action.payload
      console.log(add);
      yield axios.post(`/api/show/add`, add);
      yield alert('Show Information Added.')
      yield put({ type: 'FETCH_SHOW' });
      console.log("Add Show Saga");
    } catch (error) {
      console.log('Error with Add Show saga:', error);
    }
  }

  function* fetchShow(action) {
    try{
    const response = yield axios.get(`/api/show/`);
    yield put({ type: 'SET_SHOW', payload: response.data});
    console.log('response from server is:',response.data)
  } catch (error) {
    console.log('Unabale to fetch Show information from server', error);
    alert('Unabale to fetch customers from server', error);
  }
}
// attempt this again
function* deleteShowInfo(action) {
  const show = action.payload;
  console.log('In saga archive delete', show);
  try {
      yield axios.delete(`/api/show/${show}`);
      let nextAction = { type: 'FETCH_SHOW' };
      yield put(nextAction);
  }catch(error){
    console.log('Unable to delete trade show info', error);
    alert('Unable to delete trade show information', error);
  }
}
  
  function* showIntakesaga() {
    yield takeLatest('ADD_SHOW', addShow);
    yield takeLatest('FETCH_SHOW', fetchShow);
    yield takeLatest('DELETE_SHOW_INFO', deleteShowInfo);
    
  }
  export default showIntakesaga;
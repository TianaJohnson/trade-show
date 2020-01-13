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
    const response = yield axios.get(`/api/show/show`);
    yield put({ type: 'SET_SHOW', payload: response.data});
    console.log('response from server is:',response.data)
  } catch (error) {
    console.log('Unabale to fetch Show information from server', error);
    alert('Unabale to fetch customers from server', error);
  }
}
//why do i fight with this
function* deleteShowInfo(action) {
  console.log('In saga archive delete', action.payload.id)
  try {
    yield axios.put(`/api/show/delete/${action.payload.id}`, action.payload);
    yield alert('Customer Deleted.')
    yield put({ type: 'FETCH_CUSTOMER' });
  }catch(error){
    console.log('Unable to delete customer info', error);
    alert('Unable to delete customer information', error);
  }
}
  
  function* showIntakesaga() {
    yield takeLatest('ADD_SHOW', addShow);
    yield takeLatest('FETCH_SHOW', fetchShow);
    yield takeLatest('DELETE_SHOW_INFO', deleteShowInfo);
    
  }
  export default showIntakesaga;
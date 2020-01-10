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

  function* deleteShowInfo(action) {
    try{
      const removeShow = action.payload
      //const response = 
      yield axios.delete(`/api/show/delete/${removeShow}`);
      yield put({ type: 'FETCH_SHOW'}); // may need payload:response.data   
    }catch(error){
      console.log('There is an error in show delete saga', error)
    }
  }

  function* showIntakesaga() {
    yield takeLatest('ADD_SHOW', addShow);
    yield takeLatest('FETCH_SHOW', fetchShow);
    yield takeLatest('DELETE_SHOW_INFO', deleteShowInfo);
    
  }
  export default showIntakesaga;
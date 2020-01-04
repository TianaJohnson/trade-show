import axios from 'axios';
import { takeLatest,put } from 'redux-saga/effects';

function* addShow(action) {
    try {
      yield axios.post('/api/show/add', action.payload);
      yield alert('Show Information Added.')
      yield put({ type: 'FETCH_SHOW' });
      console.log("Add Show Saga");
    } catch (error) {
      console.log('Error with Add Show saga:', error);
    }
  }

  function* fetchShow(action) {
    try{
    const responseFromServer = yield axios.get('/api/show/add');
    yield put({ type: 'SET_SHOW', payload: responseFromServer.data});
    console.log('response from server is:',responseFromServer.data)
  } catch (error) {
    console.log('Unabale to fetch Show information from server', error);
    alert('Unabale to fetch customers from server', error);
  }
}

  function* showIntakesaga() {
    yield takeLatest('ADD_SHOW', addShow);
    yield takeLatest('FETCH_SHOW', fetchShow);
    
  }

  export default showIntakesaga;
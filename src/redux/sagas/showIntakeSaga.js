import axios from 'axios';
import { takeLatest,put } from 'redux-saga/effects';

function* addShow(action) {
    try {
      yield axios.post('/api/show/add', action.payload);
      yield alert('Show Information Added.')
     // yield put({ type: 'FETCH_SHOW' });
      console.log("Add Show Saga");
    } catch (error) {
      console.log('Error with Add Show saga:', error);
    }
  }

  function* showIntakesaga() {
    yield takeLatest('ADD_SHOW', addShow);
    
  }

  export default showIntakesaga;
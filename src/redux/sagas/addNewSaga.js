import axios from 'axios';
//import { put } from 'redux-saga/effects';

function* addShow(action) {
    try {
      yield axios.post('/api/new', action.payload);
      yield alert('Show Information Added.')
     // yield put({ type: 'FETCH_SHOW' });
      console.log("Add Show Saga");
    } catch (error) {
      console.log('Error with Add Show saga:', error);
    }
  }

  export default builderIntakeSaga;
import axios from 'axios';
import { takeLatest,put } from 'redux-saga/effects';

function* addBuild(action) {
    console.log('project post saga');
    try {
        yield axios.put(`api/builder/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('Error in add project:', error);
    }
}

    function* builderSaga() {
        yield takeLatest('ADD_BUILD', addBuild);
        
      }

export default builderSaga;
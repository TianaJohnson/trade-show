import axios from 'axios';
import { takeLatest,put } from 'redux-saga/effects';

function* addBuilder(action) {
    console.log('project post saga');
    try {
        yield axios.put(`api/builder/${action.payload.id}`, action.payload);
    } catch (error) {
        console.log('Error in add project:', error);
    }
}

function* fetchBuilder(action) {
    console.log('get project server 1');
    console.log('action:')
    try {
        const responseFromServer = yield axios.get(`api/builder/${action.payload.id}`);
        yield put({ type: 'SET_BUILDER', payload: responseFromServer.data });
        console.log('response from builder server is:', responseFromServer.data);
    } catch (error) {
        console.log('Unabale to fetch builder from server', error);
        alert('Unabale to fetch builder from server', error);
    }
}

    function* builderSaga() {
        yield takeLatest('ADD_BUILDER', addBuilder);
        yield takeLatest('FETCH_BUILDER', fetchBuilder);        
      }

export default builderSaga;
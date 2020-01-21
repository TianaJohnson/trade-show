import { combineReducers } from 'redux';

const builderReducer = (state = [] , action) => {
    console.log('Builder information intake ');
      switch (action.type) {
        case 'SET_BUILDER':
        console.log('action.paylod:', action.payload)
          return action.payload;     
        default:
        console.log('state:', state)
          return state;
      }
    };

export default combineReducers({
    builderReducer,

})
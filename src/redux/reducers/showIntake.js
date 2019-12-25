//import { combineReducers } from 'redux';

//buider intake SET reducer, interacts w/ saga
const addNewReducer = (state = [] , action) => {
    console.log('Show and Builder information intake ');
      switch (action.type) {
        case 'SET_SHOW':
        console.log('action.paylod:', action.payload)
          return action.payload;     
        default:
        console.log('state:', state)
          return state;
      }
    };

    // export default combineReducers({
    //   builderIntakeReducer,

//   })

  export default addNewReducer;
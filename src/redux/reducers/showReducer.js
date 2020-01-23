import { combineReducers } from 'redux';

//buider intake SET reducer, interacts w/ saga
const showReducer = (state = [] , action) => {
    console.log('Show information intake ');
      switch (action.type) {
        case 'SET_SHOW':
        console.log('action.paylod:', action.payload)
          return action.payload;     
        default:
        console.log('state:', state)
          return state;
      }
    };

    const focusShowReducer = (state = [], action) => {
      console.log('focused show reducer');
        switch (action.type) {
          case 'SET_FOCUS_SHOW':
          console.log('action.paylod:', action.payload)
            return action.payload;
        
          default:
          console.log('state:', state)
            return state;
        }
      };

    export default combineReducers({
      showReducer,
      focusShowReducer,
  });


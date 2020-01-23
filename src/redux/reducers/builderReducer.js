import { combineReducers } from 'redux';

const emptyBuild = {
  show_name: '',
  brand: '',
 
};

const builderReducer = (state = emptyBuild, action) => {
console.log('project reducer');
switch (action.type) {
case 'CLEAR_BUILDER':
return emptyProject;
case 'SET_BUILDER':
if(action.payload && action.payload !== '' && action.payload.project_name) {
console.log('action.paylod:', action.payload)
return action.payload;
}else {
return state;
}

case 'SET_BUILDER_PROPERTY':
const propertyToChange = action.payload;
return {
  ...state,
  // key is 'brand'
  // value is "Peacock Groove"
  // e.g. state.brand = "Peacock Groove"
  [propertyToChange.key]: propertyToChange.value
}
default:
console.log('state:', state)
return state;
}
};


export default combineReducers({
    builderReducer,

})
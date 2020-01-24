import { combineReducers } from 'redux';

const emptyBuild = {
  show_name: '',
  brand: '',
  first_name:'',
  last_name:'',
  build_city:'',
  build_sate:'',
  build_country:'',
  show_id: 0,
};
//not a great day, a rest day but a commit none the less
const builderReducer = (state = emptyBuild, action) => {
console.log('project reducer');
switch (action.type) {
case 'CLEAR_BUILDER':
return emptyBuild;
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
import {combineReducers} from 'redux';

import {loginReducer} from './login';
import {registerReducer} from './register';
import {addRecipeReducer} from './addRecipe';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  addRecipeReducer,
});

export default rootReducer;

import {combineReducers} from 'redux';

import {loginReducer} from './login';
import {registerReducer} from './register';
import {addRecipeReducer} from './addRecipe';
import menu from './menu';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  addRecipeReducer,
  menu,
});

export default rootReducer;

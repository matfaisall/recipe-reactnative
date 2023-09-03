import {combineReducers} from 'redux';

import {loginReducer} from './login';
import {registerReducer} from './register';
import {addRecipeReducer} from './addRecipe';
import menu from './menu';
import myMenu from './myMenu';
import deleteMyMenuReducer from './deleteMyMenu';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  addRecipeReducer,
  menu,
  myMenu,
  deleteMyMenuReducer,
});

export default rootReducer;

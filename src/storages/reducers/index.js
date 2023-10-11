import {combineReducers} from 'redux';

import {loginReducer} from './login';
import {registerReducer} from './register';
import {addRecipeReducer} from './addRecipe';
import menu from './menu';
import myMenu from './myMenu';
import deleteMyMenuReducer from './deleteMyMenu';
import updateMyMenuReducer from './updateMenu';
import menuByIdReducer from './menuById';
import searchMenuReducer from './searchMenu';
import {logOutReducer} from './logOut';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  addRecipeReducer,
  menu,
  myMenu,
  deleteMyMenuReducer,
  updateMyMenuReducer,
  menuByIdReducer,
  searchMenuReducer,
  logOutReducer,
});

export default rootReducer;

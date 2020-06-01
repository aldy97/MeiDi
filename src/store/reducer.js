import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as aboutReducer } from '../pages/about/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  about: aboutReducer,
});

export default reducer;

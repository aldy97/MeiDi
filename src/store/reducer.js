import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as aboutReducer } from '../pages/about/store';
import { reducer as projectsReducer } from '../pages/projects/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  about: aboutReducer,
  projects: projectsReducer,
});

export default reducer;

import { combineReducers } from 'redux';

import gitHubSearch from './gitHubSearch';
import api from './api_reducer';

export default combineReducers({
  gitHubSearch,
  api,
});

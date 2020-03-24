import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import weather, { weatherSaga } from './weather';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  weather,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), weatherSaga()]);
}

export default rootReducer;

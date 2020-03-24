import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as weatherAPI from '../lib/api/weather';
import { takeLatest } from 'redux-saga/effects';

const [
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
] = createRequestActionTypes('weather/GET_WEATHER');

export const getWeather = createAction(
  GET_WEATHER,
  ({ lat, lon, units, appid }) => ({ lat, lon, units, appid }),
);

const getWeatherSaga = createRequestSaga(GET_WEATHER, weatherAPI.getWeather);
export function* weatherSaga() {
  yield takeLatest(GET_WEATHER, getWeatherSaga);
}

const initialState = {
  weather: null,
  error: null,
};

const weather = handleActions(
  {
    [GET_WEATHER_SUCCESS]: (state, { payload: weather }) => ({
      ...state,
      weather,
    }),
    [GET_WEATHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default weather;

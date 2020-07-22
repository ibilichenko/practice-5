import {
  FETCH_WEEK_START,
  FETCH_WEEK_SUCCESS,
  FETCH_WEEK_FAILURE } from "../actions/week-forecast";
import { FETCH_DAY_FAILURE } from "../actions/day-forecast";

const weekForecast = (state = [], action) => {
  if(action.type === FETCH_WEEK_SUCCESS) {
    state = action.weekForecast;

    return state;
  } else {
    return state;
  }
};

const weekLoading = (state = false, action) => {
  if(action.type === FETCH_WEEK_START) {
    state = true;

    return state;
  } else {
    return state;
  }
};

const weekError = (state = false, action) => {
  if(action.type === FETCH_WEEK_FAILURE) {
    state = true;

    return state;
  } else {
    return state;
  }
};

export { weekForecast, weekLoading, weekError };

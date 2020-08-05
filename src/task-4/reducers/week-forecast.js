import {
  FETCH_WEEK_START,
  FETCH_WEEK_SUCCESS,
  FETCH_WEEK_FAILURE,
  DELETE_ERROR } from "../actions/week-forecast";
import { FETCH_DAY_FAILURE, FETCH_DAY_START } from "../actions/day-forecast";

const weekForecast = (state = [], action) => {
  if(action.type === FETCH_WEEK_SUCCESS) {
    return action.weekForecast;
  } else {
    return state
  }
};

const weekLoading = (state = false, action) => {

  switch(action.type) {
  case FETCH_WEEK_START:
    return true;
  case FETCH_WEEK_SUCCESS:
    return false;
  case FETCH_WEEK_FAILURE:
    return false;
  default: return state;
  }
};

const errors = (state = [], action) => {
  const copy = state.slice();
  switch(action.type) {
  case FETCH_DAY_FAILURE :
    return state.concat({id: state.length + 1, error: action.error});

  case FETCH_WEEK_FAILURE :
    return state.concat({id: state.length + 1, error: action.error});

  case DELETE_ERROR:
    
    copy.forEach((element, index) => {
      if (element.id === Number(action.errorId)) {
        copy.splice(index, 1);
      }
    })
    
    return copy;
  default: return state;
  }
}

const weekError = (state = false, action) => {
  switch(action.type) {
  case FETCH_WEEK_FAILURE:
    return true;
  case FETCH_WEEK_SUCCESS:
    return false;
  default: return state;
  }
};

export { weekForecast, weekLoading, weekError, errors };

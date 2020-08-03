import {
  FETCH_WEEK_START,
  FETCH_WEEK_SUCCESS,
  FETCH_WEEK_FAILURE,
  DELETE_ERROR } from "../actions/week-forecast";
import { FETCH_DAY_FAILURE, FETCH_DAY_START } from "../actions/day-forecast";

const weekForecast = (state = [], action) => {
  if(action.type === FETCH_WEEK_SUCCESS) {
    state = action.weekForecast;

    return state;
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
    
  

  // if(action.type === FETCH_WEEK_START) {
  //   state = false;

  //   return state;
  // } else if (action.type === FETCH_WEEK_SUCCESS){
  //   return state;
  // }
};

const errors = (state = [], action) => {
  let res = [];
  switch(action.type) {
  case FETCH_DAY_FAILURE :
    state.push({id: state.length + 1, error: action.error})
    state.forEach(element => res.push(element))

    return res;

  case FETCH_WEEK_FAILURE :
    state.push({id: state.length + 1, error: action.error})
    state.forEach(element => res.push(element))

    return res;

  case DELETE_ERROR:
    state.forEach((element, index) => {
      if (element.id === Number(action.errorId)) {
        state.splice(index, 1);
      }
    })
    state.forEach(element => res.push(element))

    return res;
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

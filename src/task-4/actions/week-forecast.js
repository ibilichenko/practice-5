import { getWeekForecast } from "../api";
export const FETCH_WEEK_START = "FETCH_WEEK_START";
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const FETCH_WEEK_FAILURE = "FETCH_WEEK_FAILURE";

const fetchWeekStart = () => ({
  type: FETCH_WEEK_START
});

const fetchWeekSuccess = (weekForecast) => ({
  type: FETCH_WEEK_SUCCESS,
  weekForecast
});

const fetchWeekFailure = e => ({
  type: FETCH_WEEK_FAILURE,
  error: e.message
});

export const fetchWeekForecast = () => (dispatch, getState) => {


  const week = getState().weekForecast;
  if(week.length != 7 ) {
    return;
  }
  dispatch(fetchWeekStart());

  return getWeekForecast()
    .then( weekData => dispatch(fetchWeekSuccess(weekData)))
    .catch( e => dispatch(fetchWeekFailure(e)))
};
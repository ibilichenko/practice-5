import { getWeekForecast } from "../api";
export const FETCH_WEEK_START = "FETCH_WEEK_START";
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const FETCH_WEEK_FAILURE = "FETCH_WEEK_FAILURE";
export const DELETE_ERROR = "DELETE_ERROR";



export const deleteError = (id) => ({
  type: DELETE_ERROR,
  errorId: id
})



const fetchWeekStart = () => ({
  type: FETCH_WEEK_START
});

const fetchWeekSuccess = (weekForecast) => ({
  type: FETCH_WEEK_SUCCESS,
  weekForecast,
});

const fetchWeekFailure = e => ({
  type: FETCH_WEEK_FAILURE,
  error: e.message
});

export const fetchWeekForecast = () => (dispatch, getState) => {

  dispatch(fetchWeekStart());

  return getWeekForecast()
    .then( weekData => dispatch(fetchWeekSuccess(weekData)))
    .catch( e => dispatch(fetchWeekFailure(e)))
};
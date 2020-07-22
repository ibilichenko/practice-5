import React from "react";
import WeatherDay from "./WeatherDay.jsx";
import WeatherDetails from "./WeatherDetails.jsx";
import {fetchWeekForecast} from "../actions/week-forecast"

import { daysShort } from "../api/data-generator";
import { connect } from "react-redux";

class Weather extends React.Component {
  componentDidMount() {
    console.log(this.props.method());
  }

  render() {
    if(this.props.weekError) {
      return (
        <div className="weather">
          <div className="error">Error occurred during data fetch. Try to <button>reload</button></div>
        </div>
      )
    }
    if(this.props.weekLoading) {
      return (
        <div className="weather">
          <span className="fa fa-spinner fa-spin"></span>
        </div>
      )
    } else {
      return (
        <div className="weather">
          <ul className="list-inline mx-auto">
            {daysShort.map(day => (
              <WeatherDay
                day={day}
                key={day.dt} />
            ))}
          </ul>
          <WeatherDetails />
        </div>
      )
    }
  }
    
}

const mapStateToProps = state => ({
  weekLoading: state.weekLoading,
  weekError: state.weekError,
  weekForecast: state.weekForecast
});
const mapDispatchToProps = dispatch => ({
  method: dispatch(fetchWeekForecast)
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
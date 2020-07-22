import React from "react";
import WeatherDay from "./WeatherDay.jsx";
import WeatherDetails from "./WeatherDetails.jsx";
import {fetchWeekForecast} from "../actions/week-forecast"

import { daysShort } from "../api/data-generator";
import { connect } from "react-redux";
import { weekForecast } from "../reducers/week-forecast.js";

class Weather extends React.Component {
  componentDidMount() {
    const disp = this.props.dispatch;
    this.props.method(this.props.dispatch,this.props.getState)
  }

  render() {
    if(this.props.weekError) {
      return (
        <div className="weather">
          <div className="error">Error occurred during data fetch. Try to <button onClick={this.props.method(this.props.dispatch,this.props.getState)}>reload</button></div>
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
        <div className="weather" onLoad={() => console.log(this.props.weekForecast)}>
          <ul className="list-inline mx-auto">
            {this.props.weekForecast.map(day => (
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
  getState: function() {return state},
  weekLoading: state.weekLoading,
  weekError: state.weekError,
  weekForecast: state.weekForecast
});
const mapDispatchToProps = dispatch => ({
  method: dispatch(fetchWeekForecast)
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
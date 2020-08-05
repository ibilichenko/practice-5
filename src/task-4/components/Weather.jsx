import React from "react";
import WeatherDay from "./WeatherDay.jsx";
import WeatherDetails from "./WeatherDetails.jsx";
import {fetchWeekForecast} from "../actions/week-forecast"
import ErrorLogger from "./ErrorLogger.jsx";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeekForecast()
  }

  render() {
    if(this.props.weekLoading) {
      return (
        <div className="weather">
          <span className="fa fa-spinner fa-spin"></span>
        </div>
      )
    } else if(this.props.weekError) {
      return (
        <div>
          <ErrorLogger/>
           
          <div className="weather">
            <div className="error">Error occurred during data fetch. Try to <button onClick={this.props.fetchWeekForecast}>reload</button></div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <ErrorLogger/>
          <div className="weather">
            <ul className="list-inline mx-auto">
              {this.props.weekForecast.map(day => (
                <WeatherDay
                  day={day}
                  key={day.dt} />
              ))}
            </ul>
            <WeatherDetails />
          </div>
        </div>
      )
    }
  }
    
}

const mapStateToProps = state => ({
  weekLoading: state.weekLoading,
  weekError: state.weekError,
  weekForecast: state.weekForecast,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  fetchWeekForecast: (id) => dispatch(fetchWeekForecast(id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

Weather.propTypes = {
  fetchWeekForecast: PropTypes.func,
  weekError: PropTypes.bool,
  weekLoading: PropTypes.bool,
  weekForecast: PropTypes.array,
}


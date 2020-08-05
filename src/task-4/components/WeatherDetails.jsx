import React from "react";
import { connect } from "react-redux";
import {fetchDayForecast} from "../actions/day-forecast"
import PropTypes from "prop-types";


class WeatherDetails extends React.Component {
  componentDidUpdate() {
    if(!this.props.forecast[this.props.selectedDt]) {
      this.props.fetchDayForecast(this.props.selectedDt)
    }
  }
  
  render() {
    const dayForecast = this.props.forecast[this.props.selectedDt]
    if(dayForecast) {
      if(dayForecast.loading === true) {
        return (
          <div className="details">
            <span className="fa fa-spinner fa-spin"></span>
          </div>
        )
        
      } else if(dayForecast.error === true) {
        return (
          <div className="weather">
            <div className="error">Error occurred during data fetch. Try to <button onClick={() => {this.props.fetchDayForecast(this.props.selectedDt)}}>reload</button></div>
          </div>
        )
      } else if(dayForecast?.data) {
        let day = dayForecast.data
    
        return (
          <div className="details">
            <div className="day-name">
              <div>{new Date(day.dt).toLocaleDateString('en-US',{weekday:'short', month:'short', day: 'numeric'})}</div>
              <img src={`img/${day.weather.icon}.png`} alt={day.weather.description} />
            </div>
            <div>
              <dl>
                <dt>Min temp</dt>
                <dd>{Math.round(day.temp.min)}&#x2103;</dd>
    
                <dt>Max Temp</dt>
                <dd>{Math.round(day.temp.max)}&#x2103;</dd>
    
                <dt>Weather</dt>
                <dd>{day.weather.description}</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>Wind</dt>
                <dd>{`${day.speed}m/s`}</dd>
    
                <dt>Humidity</dt>
                <dd>{`${day.humidity}%`}</dd>
    
                <dt>Pressure</dt>
                <dd>{`${day.pressure}hpa`}</dd>
              </dl>
            </div>
          </div>
        );
      }
    } else {
      return(
        <h1></h1>
      )
    }
  }
}

const mapStateToProps = state => ({
  selectedDt: state.selectedDt,
  forecast: state.dayForecast
});
const mapDispatchToProps = dispatch => ({
  fetchDayForecast: dt => dispatch(fetchDayForecast(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);

WeatherDetails.propTypes = {
  fetchDayForecast: PropTypes.func,
  selectedDt: PropTypes.number,
  forecast: PropTypes.object
}
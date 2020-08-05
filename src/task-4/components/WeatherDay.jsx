import React from "react";
import { connect } from "react-redux";
import {openDayDetails} from "../actions/day-forecast"
import PropTypes from "prop-types";


const WeatherDay = props => {
 
  function handleClick() {
    props.openDayDetails(props.day.dt)
  }

  return (
    <li className={`list-inline-item ${props.selectedDt === props.day.dt ? "active" : ""}`} onClick={handleClick}>
      <div className="day-name">{new Date(props.day.dt).toLocaleDateString('en-US',{weekday:'short'})}</div>
      <img src={`img/${props.day.weather.icon}.png`} alt={props.day.weather.description} />
      <div className="temp">{Math.round(props.day.temp.min)}&#x2103; {Math.round(props.day.temp.max)}&#x2103;</div>
    </li>
  );
};

const mapStateToProps = state => ({
  selectedDt: state.selectedDt
});
const mapDispatchToProps = dispatch => ({
  openDayDetails: dt => dispatch(openDayDetails(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
WeatherDay.propTypes = {
  openDayDetails: PropTypes.func,
  day: PropTypes.object,
  selectedDt: PropTypes.number
}
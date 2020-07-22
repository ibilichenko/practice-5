import React from "react";
import { connect } from "react-redux";
import { days } from "../api/data-generator";
import { daysShort } from "../api/data-generator";


const WeatherDay = props => {
 
  return (
    <li className={`list-inline-item${props.selectedDt=== props.day.dt ? "active" : ""}`} onClick={()=> console.log(props.dispatch)}>
      <div className="day-name">{new Date(props.day.dt).toLocaleDateString('en-US',{weekday:'short'})}</div>
      <img src={`img/${props.day.weather.icon}.png`} alt={`${props.day.weather.icon}.png`} />
      <div className="temp">{Math.round(props.day.temp.min)}&#x2103; {Math.round(props.day.temp.max)}&#x2103;</div>
    </li>
  );
};

const mapStateToProps = state => ({
  selectedDt: state.selectedDt
});
const mapDispatchToProps = dispatch => ({
  // openDayDetails: dispatch.openDayDetails,
  // dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
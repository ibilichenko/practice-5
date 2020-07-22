import React from "react";
import { days } from "../api/data-generator";
import { connect } from "react-redux";

class WeatherDetails extends React.Component {

  showData() {
    console.log(days[Object.keys(days)[0]])
  }

  render() {
    const day = days[Object.keys(days)[0]];

    return (
      <div className="details" onLoad={this.showData}>
        <div className="day-name">
          <div>{new Date(day.dt).toLocaleDateString('en-US',{weekday:'short', month:'short', day: 'numeric'})}</div>
          <img src={`img/${day.weather.icon}.png`} alt="Raining" />
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
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
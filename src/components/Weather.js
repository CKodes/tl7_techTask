import React from 'react';

export class WeatherInfo extends React.Component {
  state = {
    loading: true,
    info: null,
  };

  async componentDidMount() {
    const url =
      'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ info: data.items[0].forecasts[7], loading: false });
    console.log(data.items[0]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.info ? (
          <div>loading...</div>
        ) : (
          <div className='weather'>
            <div>
              <h3>The weather at {this.state.info.area} is </h3>
            </div>
            <div>
              <h3>{this.state.info.forecast}</h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WeatherInfo;

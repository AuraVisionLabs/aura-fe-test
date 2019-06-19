import React, { Component } from "react";
import { DatePicker } from "@blueprintjs/datetime";
import moment from "moment";

import { Button, Card, Elevation } from "@blueprintjs/core";

import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const data = await fetch("https://api.myjson.com/bins/rvkk5");
    const { flights } = await data.json();
    this.setState({ flights });
  }

  updateDepartureDate(departureDate) {
    this.setState({ departureDate });
  }

  updateReturnDate(returnDate) {
    this.setState({ returnDate });
  }

  getMatchingFlights() {
    const { flights = [], departureDate, returnDate } = this.state;

    const obCorrectDate = flights.filter(
      f =>
        f.origin === "London" &&
        moment(f.departure).isSame(moment(departureDate), "day")
    );

    const obDestinationsList = obCorrectDate.map(f => f.destination);

    const ibCorrectDate = flights.filter(
      f =>
        obDestinationsList.includes(f.origin) &&
        f.destination === "London" &&
        moment(f.departure).isSame(moment(returnDate), "day")
    );

    const ibOriginsList = ibCorrectDate.map(f => f.origin);

    const availableOutboundFlights = obCorrectDate.filter(f =>
      ibOriginsList.includes(f.destination)
    );

    return {
      outbound: availableOutboundFlights,
      inbound: ibCorrectDate
    };
  }

  render() {
    const { outbound = [], inbound = [] } = this.getMatchingFlights();

    return (
      <div className="App">
        <h1>Flights application</h1>
        <div className="container">
          <div className="date-pickers">
            <div>
              <h2>Depart</h2>
              <DatePicker onChange={this.updateDepartureDate.bind(this)} />
            </div>
            <div>
              <h2>Return</h2>
              <DatePicker onChange={this.updateReturnDate.bind(this)} />
            </div>
          </div>
          <div className="flights-list">
            <div className="flights-list-ob">
              {outbound.map(flight => (
                <Card
                  interactive={true}
                  elevation={Elevation.TWO}
                  key={flight.departure}
                >
                  <h5>
                    {flight.origin} to {flight.destination}
                  </h5>
                  <p>{moment(flight.departure).format("ddd HH:mm")}</p>
                  <Button>Buy</Button>
                </Card>
              ))}
            </div>
            <div className="flights-list-ob">
              {inbound.map(flight => (
                <Card
                  interactive={true}
                  elevation={Elevation.TWO}
                  key={flight.departure}
                >
                  <h5>
                    {flight.origin} to {flight.destination}
                  </h5>
                  <p>{moment(flight.departure).format("ddd HH:mm")}</p>
                  <Button>Buy</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

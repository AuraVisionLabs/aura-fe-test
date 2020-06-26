import React, { Component } from "react";
import moment from "moment";
import { Button, Card, Elevation } from "@blueprintjs/core";

import { flightData } from "../../../services/api";
import PageWrapper from '../../page-wrapper'
import FlightSearchBar from '../../flight-search-bar'

class App extends Component {
    state = {};

    async componentDidMount() {
        const data = await flightData.fetchAll();
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
            <PageWrapper>
                <FlightSearchBar onDepartureDateChange={this.updateDepartureDate.bind(this)} onReturnDateChange={this.updateReturnDate.bind(this)} />
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
            </PageWrapper>
        );
    }
}

export default App;

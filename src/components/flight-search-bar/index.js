import React from 'react';
import styled from 'styled-components';
import { Card } from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/datetime";

const DatePickers = styled.div`
    display: flex;
    justify-content: center;
`;

const DatePickerCard = styled(Card)`
    margin: 4em;
`

const FlightSearchBar = ({ onDepartureDateChange, onReturnDateChange}) => (
    <DatePickers>
        <DatePickerCard>
            <h2>Depart</h2>
            <DatePicker onChange={onDepartureDateChange} />
        </DatePickerCard>
        <DatePickerCard>
            <h2>Return</h2>
            <DatePicker onChange={onReturnDateChange} />
        </DatePickerCard>
    </DatePickers>
);

export default FlightSearchBar
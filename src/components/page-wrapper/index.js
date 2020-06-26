import React, { Component } from "react";
import styled from 'styled-components';

const PageWrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    width:  100%;
`

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`

export default ({children}) => (
    <PageWrapper>
        <Container>
            {children}
        </Container>
    </PageWrapper>
)
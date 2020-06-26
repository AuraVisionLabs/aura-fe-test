import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Intent, Icon } from '@blueprintjs/core';
import { SEARCH } from '../../../constants/routes';

const Title = styled.h3`
  margin-top: 1em;
`;
const Wrapper = styled.section`
  padding: 2em;
  background: #EFF3F6;
  width: 100%;
  text-align: center;
`;

const Page404 = () => (
    <Wrapper>
        <Icon icon="warning-sign" />
        <Title>Page not found</Title>
        <Link to={SEARCH}>
            <Button intent={Intent.PRIMARY}>Home</Button>
        </Link>
    </Wrapper>
);

export default Page404;

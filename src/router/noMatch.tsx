import React, { Component } from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
    text-align: left;
    border: 3px solid #001529;
    padding: 3rem;
    margin: 2rem auto;
    width: 40rem;
    max-width: 97%;
`;

class NoMatch extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1>nothing found</h1>
            </HeaderWrapper>
        );
    }
}
export default NoMatch;
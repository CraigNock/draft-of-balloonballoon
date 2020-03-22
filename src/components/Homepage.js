import React from 'react';
import styled from 'styled-components';
import MapMap from './Map';


const Homepage = () => {

  return(
    <>
    <StyledTitle>Where <span>is</span> my Balloon?</StyledTitle>
    <MapMap/>
    </>
  )
}

const StyledTitle = styled.h1`
  padding: 1rem;

  span {
    font-style: italic;
  }
`;


export default Homepage;
import React, { useEffect } from 'react';
import styled from 'styled-components';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
//tippy for on click marker?

import getWind from './Wind';

import {PositionContext} from './PositionContext';



const provider = (x, y, z, dpr) =>  {
  return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.jpg`;
};

const StamenAttribution = () => (
  <span className='map-attribution'>
    Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
  </span>
)




const MapMap = () => {
  const {state} = React.useContext(PositionContext);
  const {position, elevation} = state;

  const [focus, setFocus] = React.useState(-73.6);

  useEffect(() => {
    let posInt = setInterval(()=>{
      setFocus(n => n + 0.00001);
      // console.log(focus);
    }, 100);
    return () => clearInterval(posInt);
  // eslint-disable-next-line
  }, []);

  return (
    <MapWrap>
      <Map
      center={[45.5, focus]}
      defaultZoom={14}
      minZoom={5}
      maxZoom={16}
      provider={provider}
      dprs={[1, 2]}
      height={800}
      attribution={<StamenAttribution/>}
      onClick={ ({ event, latLng, pixel }) => {
          console.log('click', latLng, pixel);
          getWind(position);
        } }
      >
        <Overlay anchor={[45.5, focus]} offset={[5, 15]}>
          <span role="img" aria-label='balloon'>🎈</span>
        </Overlay>

        <Marker
        anchor={[45.5, -73.59]} 
        payload={'Montreal'}
        onClick={({ event, anchor, payload }) => {
          console.log('marker', anchor, payload);
        }}
        />
      </Map>
      <StyledForm>
        <input name='lat' placeholder='lat'></input>
        <input name='long' placeholder='long'></input>
        <button type='submit'>Submit</button>
      </StyledForm>
    </MapWrap>
  )
}

const MapWrap = styled.div`
  width: 100%;
  /* height: 60vh; */
`;

const StyledForm = styled.form`

  input {
    background-color: gray;
    color: white;
    margin: .5rem;
    width: 4rem;
    height: 2rem;
    border-radius: 5px
  }
  button {
    background-color: black;
    color: white;
    height: 2rem;
    border-radius: 5px
  }
`;




export default MapMap;
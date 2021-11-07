import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'



mapboxgl.accessToken = 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA';

const Map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-56.31264, -34.87733],
          zoom: 3,
        })

        if (props.pickupCoordinates) {
          addToMap(map, props.pickupCoordinates);
        }

        if (props.dropoffCoordinates) {
          addToMap(map, props.dropoffCoordinates)
        }

        if (props.pickupCoordinates && props.dropoffCoordinates) {
          map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
          ], {
            padding: 60
          })
        }

      }, [props.pickupCoordinates, props.dropoffCoordinates])

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }
    
    return <Wrapper id='map'></Wrapper>
};

export default Map;

const Wrapper = tw.div `
flex-1 h-1/2 
`
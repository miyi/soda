import React from 'react';
import { withState, withProps, compose } from 'recompose';
import GoogleMapReact from 'google-map-react';
// import MyMarker from '../css/myMarker';
//
const map = ({
    onMapPropsChange,
    mapProps: {
        center,
        zoom
    }
}) => (
<GoogleMapReact
onChange={onMapPropsChange}
center={center}
zoom={zoom}
    >
    <MyMarker
lat={55.7558}
lng={37.6173}
    />
    </GoogleMapReact>
);

export default compose(
    withState('mapProps', 'onMapPropsChange', {
        center: {
            lat: 55.7558,
            lng: 37.6173
        },
        zoom: 4
    }),
    withProps(({ mapProps }) => bin.log(mapProps))
)(map)
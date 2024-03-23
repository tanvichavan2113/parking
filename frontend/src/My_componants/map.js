// // // Map.js
// // import React from 'react';
// // import MapView, { Marker } from 'react-native-maps';

// // class MapContainer extends React.Component {
// //   render() {
// //     return (
// //       <Map
// //         google={this.props.google}
// //         initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set your default location
// //         zoom={14}
// //       />
      
// //     );
// //   }
// // }

// // export default GoogleApiWrapper({
// //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE',
// // })(MapContainer);

import React from 'react';
import './map.css';
import {
  AzureMap,
  AzureMapsProvider,
  AzureMapHtmlMarker,
} from 'react-azure-maps';


class MapContainer extends React.Component {
  render() {
    const azureMapOptions = {
      authOptions: {
        authType: 'subscriptionKey',
        clientId: ' ',
        subscriptionKey: ' ',
      },
    };

    return (
      <AzureMapsProvider>
        <AzureMap
          options={azureMapOptions}
          center={{ lat: 28.6139, lng: 77.2090 }} // New Delhi coordinates
          zoom={7}
        >
          {/* You can add markers or other map components here */}
          <AzureMapHtmlMarker
            position={{ lat: 28.6139, lng: 77.2090 }} // Marker in New Delhi
            options={{ color: 'blue' }}
          />
        </AzureMap>
      </AzureMapsProvider>
      );
    }
  }
  
  export default MapContainer;



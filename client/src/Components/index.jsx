// index.jsx
import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import bookings from '../assets/data/bookings.json';
import CustomMarker from './Customarker';
import BookItem from './bookItem';

// Import the API key
import { GOOGLE_MAPS_API_KEY } from '../Components/config';

const INITIAL_CENTER = {
  lat: -1.2921,
  lng: 36.8210,
};

const Map = () => {
  const [selectedParkingSpot, setSelectedParkingSpot] = useState(null);

  return (
    <div style={styles.container}>
      <GoogleMap
        mapContainerStyle={styles.map}
        zoom={15}
        center={INITIAL_CENTER}
        // Provide your API key to the GoogleMap component
        apiKey={GOOGLE_MAPS_API_KEY}
      >
        {bookings.map((booking) => (
          <CustomMarker
            key={booking.id}
            booking={booking}
            onClick={() => setSelectedParkingSpot(booking)}
          />
        ))}
        {selectedParkingSpot && (
          <InfoWindow
            position={{
              lat: selectedParkingSpot.latitude,
              lng: selectedParkingSpot.longitude
            }}
            onCloseClick={() => setSelectedParkingSpot(null)}
          >
            <BookItem booking={selectedParkingSpot} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
  },
};

export default Map;

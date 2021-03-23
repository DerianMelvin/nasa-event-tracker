import { useState } from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((data) => {
    if (data.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={data.geometries[0].coordinates[1]}
          lng={data.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: data.id, title: data.title})}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDEMRNXSoHXfQjxH4mrrsNn_QRR3cqb6oA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

// Set default props
Map.defaultProps = {
  center: {
    lat: -6.17500108391241,
    lng: 106.82755445520185,
  },
  zoom: 6,
};

export default Map;

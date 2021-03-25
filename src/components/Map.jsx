import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import EventList from "./EventList";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(8);

  const markers = eventData.map((data) => {
    const id = data.categories[0].id;
    const coordinates = data.geometries[0].coordinates;

    if (id === currentEvent && !Array.isArray(coordinates[0])) {
      return (
        <LocationMarker
          lat={coordinates[1]}
          lng={coordinates[0]}
          onClick={() => setLocationInfo({ id: data.id, title: data.title })}
        />
      );
    }
    return null;
  });

  const adjustEvent = (id) => {
    setCurrentEvent(id);
  };

  return (
    <div className="map">
      <EventList adjustEvent={adjustEvent} currentEvent={currentEvent} />

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

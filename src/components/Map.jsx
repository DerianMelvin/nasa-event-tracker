import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import ListGroup from "react-bootstrap/ListGroup";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(8);

  const markers = eventData.map((data) => {
    const id = data.categories[0].id;
    const coordinates = data.geometries[0].coordinates;

    if (id === currentEvent) {
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
      <ListGroup className="event-nav-list">
        {/* Wildfires */}
        {currentEvent === 8 ? (
          <ListGroup.Item action active onClick={() => adjustEvent(8)}>
            Wildfires
          </ListGroup.Item>
        ) : (
          <ListGroup.Item action onClick={() => adjustEvent(8)}>
            Wildfires
          </ListGroup.Item>
        )}

        {/* Sea and Lake Ice */}
        {currentEvent === 15 ? (
          <ListGroup.Item action active onClick={() => adjustEvent(15)}>
            Sea and Lake Ice
          </ListGroup.Item>
        ) : (
          <ListGroup.Item action onClick={() => adjustEvent(15)}>
            Sea and Lake Ice
          </ListGroup.Item>
        )}

        {/* Volcanoes */}
        {currentEvent === 12 ? (
          <ListGroup.Item action active onClick={() => adjustEvent(12)}>
            Volcanoes
          </ListGroup.Item>
        ) : (
          <ListGroup.Item action onClick={() => adjustEvent(12)}>
            Volcanoes
          </ListGroup.Item>
        )}
        {/* TODO: handle an abnormal array value ( !Array.isArray(coordinates[0]) ) */}
      </ListGroup>

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

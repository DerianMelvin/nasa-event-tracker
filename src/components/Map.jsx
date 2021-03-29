import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import EventList from "./EventList";

const Map = ({ eventData, viewEventList, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(8);

  // Return information for selected location
  const markers = eventData.map((data) => {
    const id = data.categories[0].id;
    const coordinates = data.geometries[0].coordinates;

    const adjustLocationInfo = (info) => {
      setLocationInfo((prevState) => {
        if ((prevState === null) | (prevState !== info)) {
          return info;
        }
        return { ...prevState };
      });
    };

    if (id === currentEvent && !Array.isArray(coordinates[0])) {
      return (
        <LocationMarker
          lat={coordinates[1]}
          lng={coordinates[0]}
          onClick={() =>
            adjustLocationInfo({
              id: data.id,
              title: data.title,
              source: data.sources,
            })
          }
          key={data.id}
        />
      );
    }
    return null;
  });

  const adjustLocationInfo = () => {
    setLocationInfo(null);
  }

  const adjustEvent = (id) => {
    setCurrentEvent(id);
  };

  return (
    <div className="map">
      {/* Display list of event categories */}
      {viewEventList ? (
        <EventList adjustEvent={adjustEvent} currentEvent={currentEvent} />
      ) : (
        ""
      )}

      {/* Display Google map and mark of every location */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDEMRNXSoHXfQjxH4mrrsNn_QRR3cqb6oA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>

      {/* Display information box of selected location */}
      {locationInfo && <LocationInfoBox info={locationInfo} adjustLocationInfo={adjustLocationInfo} />}
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

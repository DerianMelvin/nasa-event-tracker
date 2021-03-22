import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBbAzO97ljZOK9HoZoOJFq3eFxx63sDM_A" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

// Set default props
Map.defaultProps = {
  center: {
    lat: -6.17500108391241,
    lng: 106.82755445520185
  },
  zoom: 6
}

export default Map;

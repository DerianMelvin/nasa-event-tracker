import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-icomoon-free/fire";
import waterIcon from "@iconify/icons-ion/water";
import volcano15 from "@iconify/icons-maki/volcano-15";

const LocationMarker = ({ lat, lng, currentEvent, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {currentEvent === 8 ? (
        <Icon icon={fireIcon} className="location-icon" />
      ) : currentEvent === 12 ? (
        <Icon icon={volcano15} className="location-icon" />
      ) : (
        <Icon icon={waterIcon} className="location-icon" />
      )}
    </div>
  );
};

export default LocationMarker;

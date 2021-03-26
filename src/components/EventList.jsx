import ListGroup from "react-bootstrap/ListGroup";

import { InlineIcon } from '@iconify/react';
import fireIcon from "@iconify/icons-icomoon-free/fire";
import waterIcon from '@iconify/icons-ion/water';
import volcano15 from '@iconify/icons-maki/volcano-15';

const EventList = ({ adjustEvent, currentEvent }) => {
  return (
    <ListGroup className="event-nav-list">
      {/* Wildfires */}
      {currentEvent === 8 ? (
        <ListGroup.Item
          className="event-list-item"
          action
          active
          onClick={() => adjustEvent(8)}
        >
          <InlineIcon className="list-item-icon" icon={fireIcon} />
          Wildfires
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          className="event-list-item"
          action
          onClick={() => adjustEvent(8)}
        >
          <InlineIcon className="list-item-icon" icon={fireIcon} />
          Wildfires
        </ListGroup.Item>
      )}

      {/* Sea and Lake Ice */}
      {currentEvent === 15 ? (
        <ListGroup.Item
          className="event-list-item"
          action
          active
          onClick={() => adjustEvent(15)}
        >
          <InlineIcon className="list-item-icon" icon={waterIcon} />
          Sea and Lake Ice
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          className="event-list-item"
          action
          onClick={() => adjustEvent(15)}
        >
          <InlineIcon className="list-item-icon" icon={waterIcon} />
          Sea and Lake Ice
        </ListGroup.Item>
      )}

      {/* Volcanoes */}
      {currentEvent === 12 ? (
        <ListGroup.Item
          className="event-list-item"
          action
          active
          onClick={() => adjustEvent(12)}
        >
          <InlineIcon className="list-item-icon" icon={volcano15} />
          Volcanoes
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          className="event-list-item"
          action
          onClick={() => adjustEvent(12)}
        >
          <InlineIcon className="list-item-icon" icon={volcano15} />
          Volcanoes
        </ListGroup.Item>
      )}
      {/* TODO: handle an abnormal array value ( !Array.isArray(coordinates[0]) ) */}
    </ListGroup>
  );
};

export default EventList;

import ListGroup from "react-bootstrap/ListGroup";

const EventList = ({ adjustEvent, currentEvent }) => {
  return (
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
  )
}

export default EventList

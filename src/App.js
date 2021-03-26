import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";

import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewEventList, setViewEventList] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const displayEventList = () => {
    setViewEventList((prevState) => !prevState);
  };

  return (
    <div>
      <Header displayEventList={displayEventList} />
      {!loading ? (
        <Map eventData={eventData} viewEventList={viewEventList} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;

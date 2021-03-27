const LocationInfoBox = ({ info }) => {
  // Remove "Wildfire / Wildfires" from title
  const regex = /(Wildfires|Wildfire)|[-]/gi;
  const adjustTitle = info.title.replace(regex, "");

  // List all available sources if 1 or more exist
  const listSource = info.source.map((data) => {
    return (
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        {data.id + " "}
      </a>
    );
  });

  return (
    <div className="location-info">
      <h2>
        <strong>{adjustTitle}</strong>
      </h2>
      <ul>
        <li>ID: {info.id}</li>
        <li>Sources: {listSource} </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;

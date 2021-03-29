const LocationInfoBox = ({ info }) => {
  // Remove "Wildfire / Wildfires" from title
  const regexTitle = /(Wildfires|Wildfire)|[-]/gi;
  const adjustTitle = info.title.replace(regexTitle, "");

  // List all available sources if 1 or more exist
  const listSource = info.source.map((data, i) => {
    return (
      <li key={i}>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.id}
        </a>
      </li>
    );
  });

  return (
    <div className="location-info">
      <h2>
        <strong>{adjustTitle}</strong>
      </h2>
      <h5>
        <em>ID: {info.id}</em>
      </h5>
      <h5>Sources:</h5>

      <ul>
        {listSource}
      </ul>
    </div>
  );
};

export default LocationInfoBox;

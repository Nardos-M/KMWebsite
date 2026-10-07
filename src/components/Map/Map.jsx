import "./Map.css";

function Map({
  address,
  embedSrc,
  title = "Church location on Google Maps",
}) {
  const src =
    embedSrc ||
    (address
      ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
      : "");

  return (
    <section className="map">
      <h2>Find Us</h2>

      {src ? (
        <div className="map-frame">
          <iframe
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {address ? (
            <a
              className="map-open"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          ) : null}
        </div>
      ) : (
        <div className="map-placeholder">
          Add your address to show the map.
        </div>
      )}

    </section>
  );
}

export default Map;

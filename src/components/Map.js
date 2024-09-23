import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "../styles/map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const Ages = { lng: -3.47907, lat: 42.36989 };
  const zoom = 14;
  maptilersdk.config.apiKey = "Vem6ahnIIZWT4NPZI7dU";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [Ages.lng, Ages.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([-3.47907, 42.36989])
      .addTo(map.current);
  }, [Ages.lng, Ages.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

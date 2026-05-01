"use client";

import React, { useEffect, useMemo } from "react";
import L, { LatLngBoundsExpression } from "leaflet";
import {
  MapContainer,
  ImageOverlay,
  GeoJSON,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import { FeatureCollection, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";
import { PointOfInterest } from "@/app/constants/places-of-interest";

export interface KingdomProperties {
  id: string;
  kingdomName: string;
  element: string;
  description: string;
  loreDetails: string;
}

type KingdomGeoJSON = FeatureCollection<Geometry, KingdomProperties>;

interface FantasyMapProps {
  geoJsonData: KingdomGeoJSON | null;
  onKingdomClick: (properties: KingdomProperties) => void;
  height?: string;
  markers?: PointOfInterest[];
}

const mapImageConfiguration = {
  url: "/map/the-known-world.svg",
  width: 10000,
  height: 2160,
};

const createGameIcon = (type: string) =>
  L.icon({
    iconUrl: `/icons/${type}.svg`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

const calculateBounds = (): LatLngBoundsExpression => {
  const { width, height } = mapImageConfiguration;
  return [
    [0, 0],
    [-height, width],
  ];
};

function MapController({ bounds }: { bounds: LatLngBoundsExpression }) {
  const map = useMap();

  useEffect(() => {
    const adjustConstraints = () => {
      //  Calculate the minimum zoom allowed to keep the map filling the container

      const minZoom = map.getBoundsZoom(bounds, true);

      map.setMinZoom(minZoom);

      // Lock the map bounds so the user can't pan into the background color
      map.setMaxBounds(bounds);

      // Initial View: Center the map at the calculated min zoom
      map.setView([-1080, 5000], minZoom);
    };

    adjustConstraints();

    const handleResize = () => {
      map.invalidateSize();
      adjustConstraints();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [map, bounds]);

  return null;
}

const FantasyMap: React.FC<FantasyMapProps> = ({
  geoJsonData,
  onKingdomClick,
  height = "100%",
  markers = [],
}) => {
  const bounds = useMemo(() => calculateBounds(), []);

  return (
    <div style={{ height, width: "100%", position: "relative" }}>
      <MapContainer
        crs={L.CRS.Simple}
        minZoom={-10}
        maxZoom={2}
        scrollWheelZoom={true}
        className="h-full w-full bg-[#0b0c10]"
        attributionControl={false}
        bounceAtZoomLimits={true}
      >
        <MapController bounds={bounds} />

        <ImageOverlay
          url={mapImageConfiguration.url}
          bounds={bounds}
          zIndex={1}
        />

        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={{
              weight: 1,
              color: "#daa520",
              opacity: 0.1,
              fillOpacity: 0.02,
            }}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: (e) => {
                  onKingdomClick(feature.properties);
                  L.DomEvent.stopPropagation(e);
                },
              });
            }}
          />
        )}

        {markers.map((poi) => (
          <Marker
            key={poi.id}
            position={poi.coords}
            icon={createGameIcon(poi.type)}
          >
            <Popup className="fantasy-popup">
              <div className="p-1 font-serif">
                <h3 className="font-bold text-lg text-[#331a00] border-b border-gold/30 mb-1">
                  {poi.name}
                </h3>
                <p className="text-xs italic text-[#555] leading-snug">
                  {poi.description}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FantasyMap;

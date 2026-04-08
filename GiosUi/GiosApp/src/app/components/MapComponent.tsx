import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = defaultIcon;

const position: LatLngExpression = [52.2297, 21.0122];

export const MapComponent = () => {
    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Hej 👋 <br /> To jest Warszawa!
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export interface MapMarker {
    id: string;
    name: string;
    position: [number, number];
};

/*

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapMarker } from "./types";

type Props = {
  markers: MapMarker[];
  onMarkerClick: (marker: MapMarker) => void;
};

export const MapView = ({ markers, onMarkerClick }: Props) => {
  return (
    <MapContainer
      center={[52.2297, 21.0122]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          eventHandlers={{
            click: () => onMarkerClick(marker),
          }}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

------------------------
const handleMarkerClick = (marker: MapMarker) => {
  setSelectedMarker(marker);
};

*/
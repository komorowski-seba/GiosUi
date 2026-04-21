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

export interface MapMarker {
    id: string;
    name: string;
    position: [number, number];
};

type MapProps = {
    markers: MapMarker[];
    onMarkerClick: (marker: MapMarker) => void;
};

export const MapComponent = ({markers, onMarkerClick}: MapProps) => {
    return (
        <MapContainer
            center={markers.at(0).position}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((marker) => (
                <Marker
                    key={marker.id}
                    position={marker.position}
                    eventHandlers={{
                        click: () => onMarkerClick(marker),
                    }}
                />
            ))}
            
        </MapContainer>
    );
};
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
    const bounds = markers.length > 0 ? markers.map(n => n.position) : [[49.0, 14.1], [54.8, 24.1]];
        
    return (
        <MapContainer
            bounds={bounds as L.LatLngBoundsExpression}
            boundsOptions={{ padding: [100, 100] }}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
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
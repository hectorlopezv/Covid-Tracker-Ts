import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';

import './Map.css';

export interface MapProps {
    center: any;
    zoom: any;
}
 
const Map: React.FC<MapProps> = (props) => {
    const {center, zoom} = props;

    return (  
        <div className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"        
            />        
            </MapContainer>
        </div>
    );
}
 
export default Map;
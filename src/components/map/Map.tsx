import React, {useState} from 'react';
import { MapConsumer, MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents} from 'react-leaflet';

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
            {center.lat !== 34.80746 && center.lng !== -40.4796 ?             <MapConsumer>
                {(map: any) => {
                    map.setView([center.lat, center.lng], 3);
                //map.setCenter([+center.lat, +center.long])
                return null
                }}
            </MapConsumer>  : null
            }
   
            </MapContainer>
        </div>
    );
}
 
export default Map;
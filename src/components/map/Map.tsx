import React, {useState} from 'react';
import { MapConsumer, MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents} from 'react-leaflet';
import {showDataOnMap} from '../../utils/showData';

import './Map.css';


export interface MapProps {
    center: any;
    zoom: any;
    countries: any;
    cases: string;
}

const Map: React.FC<MapProps> = (props) => {
    const {countries, center, zoom, cases} = props;
    return (  
        <div className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"        
            />
            {center.lat !== 34.80746 && center.lng !== -40.4796 ?             <MapConsumer>
                {(map: any) => {
                    map.setView([center.lat, center.lng], zoom);
                //map.setCenter([+center.lat, +center.long])
                return null
                }}
            </MapConsumer>  : null
            }
            {showDataOnMap(countries, cases)}
            </MapContainer>
        </div>
    );
}
 
export default Map;
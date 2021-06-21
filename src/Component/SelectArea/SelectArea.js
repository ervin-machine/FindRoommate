import React from 'react'
import './SelectArea.css'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import marker from '../../Assets/marker.png'
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZXJ2aW5ob2R6aWMxIiwiYSI6ImNrazJicWF1aTB6bXkydnJyZTk3cTk5OWwifQ.ll0tA2_cIQhh2qrQURfwxw'
  });

function SelectArea() {
    return (
        <div className="selectarea">
            <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Marker
                    coordinates={[-0.2416815, 51.5285582]}
                    anchor="bottom"
                >
                    <img src={marker} alt="marker" />
                </Marker>
            </Map>
            <div className="sa-background">
            <div className="sa-header">
                <h1 className="sa-header-text">
                    Select Area
                </h1>
            </div>
            </div>
            <div className="sa-footer">
                <button className="sa-button">SHOW ME THE RESULTS</button>
            </div>
        </div>
    )
}

export default SelectArea

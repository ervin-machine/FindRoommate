import React, { useState } from 'react'
import './UserHome.css'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import marker from '../../Assets/marker.png'
import home from '../../Assets/home.png'
import liked from '../../Assets/liked.png'
import PostCard from '../PostCard/PostCard'
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZXJ2aW5ob2R6aWMxIiwiYSI6ImNrazJicWF1aTB6bXkydnJyZTk3cTk5OWwifQ.ll0tA2_cIQhh2qrQURfwxw'
  });

function UserHome() {
    const [isOpen, setOpen] = useState(false);

    const PopUpStyle = {
        open: {
            display: 'block',
          },
          close: {
            display: 'none',
          }
        }

    const PopUpOpen = () => {
        setOpen(true);
    }
    const PopUpClose = () => {
        setOpen(false);
    }
    return (
        <div className="userhome">
            <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Marker
                    onClick={PopUpOpen}
                    coordinates={[-0.2416815, 51.5285582]}
                    anchor="bottom"
                >
                    <img src={marker} alt="marker" />
                </Marker>
                <Popup
                style={isOpen ? PopUpStyle.open : PopUpStyle.close }
                coordinates={[-0.2416815, 51.5285582]}
                >
                    <PostCard />
                </Popup>
            </Map>
            <div className="uh-background">
            <div className="uh-menu">
                <div className="uh-menu-list">
                    <img src={home} alt="home"/>
                    <img src={liked} alt="liked"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserHome

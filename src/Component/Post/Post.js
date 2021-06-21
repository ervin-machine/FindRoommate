import React from 'react'
import './Post.css'
import postimage from '../../Assets/postimage.png'
import sqft from '../../Assets/sqft.png'
import shower from '../../Assets/shower.png'
import bedroom from  '../../Assets/bedroom.png'
import oval from '../../Assets/Oval.png'
import wifi from '../../Assets/wifi.png'
import ac from '../../Assets/ac.png'
import tv from '../../Assets/tv.png'
import pets from '../../Assets/pets.png'
import photo1 from '../../Assets/photo1.png'
import photo2 from '../../Assets/photo2.png'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import marker from '../../Assets/marker.png'
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZXJ2aW5ob2R6aWMxIiwiYSI6ImNrazJicWF1aTB6bXkydnJyZTk3cTk5OWwifQ.ll0tA2_cIQhh2qrQURfwxw'
  });
function Post() {
    return (
        <div className="post">
            <img className="post-image" src={postimage} alt="post-image" />
            <p className="post-price"> $1,200 / mo</p>
            <p className="post-address">70 West 37th Street #709</p>
            <div className="post-desc">
                <img className="post-sqft-image" src={sqft} alt="sqft" />
                <img className="post-shower" src={shower} alt="shower" />
                <img className="post-bedrooms-image" src={bedroom} alt="bedroom" />
            </div>
            <div className="post-desc-text">
                <p className="post-sqft">12 sqft</p>
                <p className="post-baths">2 baths</p>
                <p className="post-bedrooms">2 bedrooms</p>
            </div>
            <hr />
            <p className="room-desc">Room description</p>
            <p className="room-desc-text">Feel at home wherever you choose to live with Blueground. You’ll love this sophisticated Midtown furnished one-bedroom apartment with its modern decor, fully equipped kitchen, and cheery living room with great balcony views. Ideally located, you’re close to all the best that New York has to offer… read more</p>
            <div className="room-amenities">
                <img src={wifi} alt="wifi" />
                <img src={tv} alt="tv" />
                <img src={pets} alt="pets" />
                <img src={ac} alt="ac" />
            </div>
            <div className="post-photos-head">
                <p className="post-photos-head-text">More photos</p>
            </div>
            <div className="post-photos">
                <img className="post-image" src={photo1} alt="photo1" />
                <img className="post-image" src={photo2} alt="photo2" />
                <img className="post-image" src={photo1} alt="photo1" />
                <img className="post-image" src={photo2} alt="photo2" />
            </div>
            <div className="post-seller-head">
                <p className="post-seller-head-text">About roommate</p>
            </div>
            <div className="post-seller">
                <img className="post-seller-image"src={oval} alt="oval" />
                <div className="post-seller-infor">
                    <p className="post-seller-name">Dennis, 25</p>
                    <p className="post-seller-job">Software developer at Blueground</p>
                    <p className="post-seller-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu semper velit. Nam tempor gravida libero, a gravida odio dapibus at. Donec sagittis neque lacus, vel posuere tortor volutpat et. Nulla ut tempor arcu. Quisque id sapien at augue elementum consequat. Vestibulum ac consequat quam.</p>
                    <button className="chat-button">CHAT WITH DENNIS</button>
                </div>
            </div>
            <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    position: 'absolute',
                    bottom: '30',
                    height: '30vh',
                    width: '310px',
                    marginLeft: '27px',
                    marginTop: '5px',
                    borderRadius: '10px'
                }}
            >
                <Marker
                    coordinates={[-0.2416815, 51.5285582]}
                    anchor="bottom"
                >
                    <img src={marker} alt="marker" />
                </Marker>
            </Map>
            </div>
            
        </div>
    )
}

export default Post

import React from 'react'
import './PostCard.css'
import postcardimage from '../../Assets/postimage.png'
import sqft from '../../Assets/sqft.png'
import shower from '../../Assets/shower.png'
import bedroom from  '../../Assets/bedroom.png'
import oval from '../../Assets/Oval.png'
function PostCard() {
    return (
        <div className="postcard">
            <img className="postcard-image" src={postcardimage} alt="postcard" />
            <p className="postcard-price"> $1,200 / mo</p>
            <p className="postcard-address">70 West 37th Street #709</p>
            <div className="postcard-desc">
                <img className="postcard-sqft-image" src={sqft} alt="sqft" />
                <img className="postcard-shower" src={shower} alt="shower" />
                <img className="postcard-bedrooms-image" src={bedroom} alt="bedroom" />
            </div>
            <div className="postcard-desc-text">
                <p className="postcard-sqft">12 sqft</p>
                <p className="postcard-baths">2 baths</p>
                <p className="postcard-bedrooms">2 bedrooms</p>
            </div>
            <hr />
            <div className="postcard-seller">
                <img className="postcard-seller-image"src={oval} alt="oval" />
                <div className="postcard-seller-infor">
                    <p className="postcard-seller-name">Dennis, 25</p>
                    <p className="postcard-seller-job">Software developer at Blueground</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard

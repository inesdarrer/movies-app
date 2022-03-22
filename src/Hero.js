import React from 'react'
import './Hero.css'
import { Link } from "react-router-dom";
import Row from './Row';
import requests from './Requests';

const Hero = () => {
    return (
        <div className="hero">
            <div className='hero-text'>
                <div className="hero-heading">Sve vaše platforme za streaming u jednoj aplikaciji.</div>
                <p>Dobijte persolnalizirane preporuke za filmove dostupne na platformi Netflix, Amazon Prime Video, Ivi i još mnogo toga.</p>

                <div className="cta-container">
                    <Link to="/discover" className="cta-button">DISCOVER</Link>
                </div>
            </div>

            <div className="hero-image">
                <Row className="hero-slider" fetchUrl={requests.fetchTrending} />
            </div>
        </div>

    )
}

export default Hero
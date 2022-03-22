import React from 'react'
import recommendations from './info/recommendations.png'
import search from './info/search@2x.png'
import watchlist from './info/watchlist.png'
import './InfoSection.css'

const InfoSection = () => {
    return (
        <div className="info">
            <div className='info-container'>
                <div className="info-image">
                    <div className='info-image-container'>
                        <img src={recommendations} alt='' /></div>
                </div>

                <div className='info-text'>
                    <h5>SVE NA JEDNOM MJESTU</h5>
                    <h2>Vaš vodič kroz streaming</h2>
                    <p>Dobijte osobne preporuke i pogledajte što ima novo na vašim omiljenim platformama za streaming.</p>
                </div>
            </div>


            <div className="info-container-reverse">
                <div className="info-image">
                    <div className='info-image-container'>
                        <img src={search} alt='' /></div>
                </div>
                <div className='info-text'>
                    <h5>JEDNO PRETRAŽIVANJE</h5>
                    <h2>Jedno pretraživanje da vlada svima</h2>
                    <p>Nema više prebacivanja s platforme na platforme kako biste pronašli dostupne filmove ili serije..</p>
                </div>
            </div>

            <div className="info-container">
                <div className="info-image">
                    <div className='info-image-container'>
                        <img src={watchlist} alt='' /></div>
                </div>
                <div className='info-text'>
                    <h5>JEDNA LISTA</h5>
                    <h2>Spojite sve svoje liste</h2>
                    <p>Na jednoj listi na svim svojim uređajima pratite serije i filmove koje želite gledati.</p>
                </div>
            </div>
        </div>

    )
}

export default InfoSection
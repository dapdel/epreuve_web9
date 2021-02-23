import React from 'react';
//import { render } from 'react-dom'
import { ReactSVG } from 'react-svg'
const Page2 = () => {
    return(
        <section id="page2">
            <div className="archives">
                <div className="text">
                    <div>
                        <h1><span>Archives</span><br/>Gustatives</h1>
                        <p>Un menu de la Maison Salvi vous a séduit? Vous refusez de croire qu&apos;il ne reviendra pas à la carte?</p>
                        <p>Je vous propose de passer en revue les recttes, et donner votre avis. Choisissez votre favori!</p>
                        <button>VOTER</button>
                    </div>
                    <div className="splotch">
                        <ReactSVG src="images/splash.svg" />
                        <img src="images/suri02.jpg" alt="chien avec toque"></img>
                    </div>
                </div>
                <div className="slider">

                </div>
            </div>
           
         
        </section>

        )};
export default Page2;
import React, { useState } from 'react';
//import { render } from 'react-dom'
import { ReactSVG } from 'react-svg';
import PopupVoter from './PopupVoter';

const Page2 = () => {
    const [popupVisible, setPopupVisible]=useState(false);
    function montrerPopupVoter(){
        setPopupVisible(true);
    }
  
    return(
        <section id="page2">
            <div className="archives">
                <div className="text">
                    <div>
                        <h1><span>Archives</span><br/>Gustatives</h1>
                        <p>Un menu de la Maison Salvi vous a séduit? Vous refusez de croire qu&apos;il ne reviendra pas à la carte?</p>
                        <p>Je vous propose de passer en revue les recttes, et donner votre avis. Choisissez votre favori!</p>
                        <button onClick={() => montrerPopupVoter()}>VOTER</button>
                    </div>
                    <div className="splotch">
                        <ReactSVG src="images/splash.svg" />
                        <img src="images/suri02.jpg" alt="chien avec toque"></img>
                    </div>
                </div>
                <div className="slider">
                    <img src="images/1.jpg" alt=""></img>
                    <img src="images/2.jpg" alt=""></img>
                    <img src="images/3.jpg" alt=""></img>
                </div>
                   {popupVisible? <PopupVoter changeVisibility={setPopupVisible}/>:null}
            </div>
           
         
        </section>

        )};
export default Page2;
import React , { useState } from 'react';
import menus from '../data/menus';
import Popup from './Popup';
const Page1 = () => {
    const [popupVisible, setPopupVisible]=useState(false);
    const [popupIndex, setPopupIndex]=useState(0);
    function montrerPopup(){

        const d = new Date();
        const jr = d.getDate();
        const jour = jr.toString();
        const mois = d.getMonth()+1;
        console.log(mois);
        let indice = "";

        for (var i = 0; i < menus.length; i++) {
            if (menus[i].jour.includes(jour)){
                indice=i;
            }
        }
        console.log(indice);




        setPopupIndex(indice);
        setPopupVisible(true);
    }
    return(
        <section id="page1">
            <div className="cercleLigne">
                <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            </div> 
            <div className="centre">
                
                <div className="intro">
                    <div className="text">
                        <div className="curry">
                            <img src="images/curry_de_legume.jpg" alt="chef-cuisinier avec assiette" />
                        </div>
                        <p>La maison Salvi vous offre chaque jour le choix entre un menu carné ou végé: 10€ livraison incluse (sur Rennes uniquement).</p>
                        <p>Des Produits sains et simples, de saison, mis en musique et en couleur par le Chef Pablo. Qui d&apos;autre aurait pu réconcilier la famille autour d&apos;une idée aussi simple et chaleureuse?</p>
                        <p>Il est temps de passer commande!</p> 
                        <button onClick={() => montrerPopup()}>MENU DU JOUR</button>
                    </div>
                </div>
                <div className="cuistot">
                    <img src="images/cuistot1.jpg" alt="chef-cuisinier avec assiette" />
                </div>
            </div>
            <div className="cercle">
            </div>

            {popupVisible? <Popup index={popupIndex} changeVisibility={setPopupVisible}/>:null}

        </section>

    )};
export default Page1;
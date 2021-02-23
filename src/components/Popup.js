import menus from '../data/menus';
import React from 'react';
// eslint-disable-next-line react/prop-types
const Popup = ({index,changeVisibility}) => {
    return(
        <div id="popup">
            <div><p className="croix" onClick={function () { changeVisibility(false);}}>X</p></div>
            <div className="menu">
                <h2>{menus[index].jour}</h2>
                <h3>Entrée</h3>
                <p>{menus[index].entrees[0]}</p>
                <p>{menus[index].entrees[1]}</p>
                <h3>Plat</h3>
                <p>{menus[index].plats[0]}</p>
                <p>{menus[index].plats[1]}</p>
                <h3>Dessert</h3>
                <p>{menus[index].desserts[0]}</p>
                <p>{menus[index].desserts[1]}</p>
            </div>
            <p className="tel">Cela vous tente? Téléphonez-moi par Whatsapp au 06&nbsp;66&nbsp;666&nbsp;666</p>
        </div>
          

        )};
export default Popup;
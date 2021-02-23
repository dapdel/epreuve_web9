import menus from '../data/menus';
import React from 'react';
// eslint-disable-next-line react/prop-types
const PopupVoter = ({changeVisibility}) => {
    let jours = menus.map(j=>j.jour);
    jours= jours.reverse();
    let index = 3;

function lire(){
    let select = document.querySelector("select");
    for (var i = 0; i < menus.length; i++) {
        if (menus[i].jour.includes(select.value)){
            index=i;
        }
    }
    let menu = document.querySelector(".menu");
    menu.innerHTML = `
    <h2>${menus[index].jour}</h2>
    <h3>Entrée</h3>
    <p>${menus[index].entrees[0]}</p>
    <p>${menus[index].entrees[1]}</p>
    <h3>Plat</h3>
    <p>${menus[index].plats[0]}</p>
    <p>${menus[index].plats[1]}</p>
    <h3>Dessert</h3>
    <p>${menus[index].desserts[0]}</p>
    <p>${menus[index].desserts[1]}</p>`
}
    return(
        <div id="popupVoter">
            <div><p className="croix" onClick={function () { changeVisibility(false);}}>X</p></div>
            <form>
                <select onChange={lire}>
                    <option>{jours[0]}</option>
                    <option>{jours[1]}</option>
                    <option>{jours[2]}</option>
                    <option>{jours[3]}</option>             
                </select>
            </form>
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

        </div>
        
          

        )};
export default PopupVoter;
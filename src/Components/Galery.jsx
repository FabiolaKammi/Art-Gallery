import React from 'react';


import akwa from '../utils/akwa.jpg';
import botleart from "../utils/botleart.jpg";
import meartech from "../utils/meartech.jpg";
import liberty from "../utils/liberty.jpg";
import umbrellart from "../utils/umbrellart.jpg";


const Galery = () => {
    const artInfo = [
        {
            title:"Nouvelle Liberte",
            image:liberty,
            infos:`This artwork pays tribute to the contemporary culture of the city: 
            the culture of recycling, of the assembly and disassembly of objects, 
            of the ability of citizens in “se débrouiller” (getting by) in many complex situations.`
        },

        {
            title:"ARTECHOUSE",
            image: meartech,
            infos:`ARTECHOUSE DC is an innovative art space located in DC. 
            It combines art, science, and technology to create immersive and interactive experiences. 
            The exhibitions often change, 
            featuring themes like cherry blossoms, abstract landscapes, and more.`
        },

        {
            title:"City Center DC",
            image:umbrellart,
            infos:`CityCenterDC. This area often features seasonal decorations,
             including the popular umbrella sky display where brightly colored umbrellas are suspended above the street`
        },
        {
            title:"Bottle Top Gown",
            image:botleart,
            infos:` They have a fascinating installation called 
            “Bottle Top Gown” by Ghanaian artist El Anatsui. This artwork is made from thousands of aluminum bottle tops and copper wire, 
            creating a stunning tapestry-like piece.`
        },
        
        {
            title:"King Akwa",
            image:akwa,
            infos:`King Akwa was no ordinary ruler. He stood firm in his convictions, even
            in the face of European invaders—first the Germans and then the French.
            He is a figure who defied the tides of history and left an indelible mark. 
             His unwavering stance places him squarely in the annals of Cameroonian history. 🌍`
        }
    ]
  return (
        <div className='gallery-container'>
            {
                artInfo.map((item, id)=>{
                    return(
                    <div key={id} className='artContainer' >
                        <div className='left'>
                <span>{item.title}</span>
                <p>{item.infos}</p>
                </div>
                    <div className='right'>
                <img src= {item.image} alt={item.title} ratio="21x21 " style={{width:300, height:400}}/>
                </div>
            </div>
                 ) })
            }
            
        </div>
  )
}

export default Galery;

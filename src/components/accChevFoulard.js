import React from 'react';
import Tissus from './Tissus';
import { MyChoosenTissue } from './ContextTissue';

const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

const AccChevFoulard = (props) => {

    return (
      <MyChoosenTissue.Consumer>
        {
          data => {
            const elementFoulard = data.findIndex((Foulard) => Foulard.newId === 'Foulard');
            const newTissuFoulard = (data.length > 0) ? data[elementFoulard].valueFill : 'white';
            const afficheTissuFoulard = isColor(newTissuFoulard) ? newTissuFoulard : "url(#"+newTissuFoulard+")";


            return (
              <svg version="1.1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="100%" width="100%" preserveAspectRatio="xMinYMin meet">
                <Tissus />

                <path id="Foulard" className="pointer" onClick={props.onFill} fill={afficheTissuFoulard} 
                stroke="#000" d="M410.2,98.3c55.2,0.2,74.5,61,74.5,61s15.1-32.6,24.6-44.9c9.9-12.9,15.5-18.9,15.5-18.9s-31.5-29.2-49.6-46.3
        c-18.1-17.1-35.4-26.8-64.6-26.6c-29.2-0.4-46.6,9.1-64.8,26.1s-50,45.9-50,45.9s5.5,6,15.3,19c9.4,12.4,31.8,46.9,31.8,46.9
        S355,98,410.2,98.3z"/>
                <path id="foulard-1" fill={afficheTissuFoulard} stroke="#000" d="M389.1,218c0,0-25.1,10.2-22.6,19.9c2.6,9.7,26,13.8,31.7,6.6c5.6-7.1,6.9-20.4,6.9-20.4L389.1,218z"/>
                <path id="foulard-2" fill={afficheTissuFoulard} stroke="#000" d="M433.2,219c0,0,25.1,10.2,22.6,19.9c-2.6,9.7-26,13.8-31.7,6.6c-5.6-7.1-6.9-20.4-6.9-20.4L433.2,219z"/>
                <path className="fille3" d="M370,232.2c0,0-3.8,11.5,6.6,2s13.5-15.3,13.5-15.3"/>
                <path className="fille3" d="M420.8,226.6c0,0,16.1,10.5,13.5,15.3s-5.6,6.6-9.4,1.5"/>

              </svg>
            )
          }
        }
      </MyChoosenTissue.Consumer>
        
    )
}
export default AccChevFoulard;


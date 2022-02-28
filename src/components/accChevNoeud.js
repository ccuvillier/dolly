import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import Tissus from './Tissus';
import { MyChoosenTissue } from './ContextTissue';

const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

const AccChevNoeud = (props) => {
    return (
        <MyChoosenTissue.Consumer>
        {
            data => {
                const elementNoeud = data.findIndex((Noeud) => Noeud.newId === 'Noeud');
                const newTissuNoeud = (data.length > 0) ? data[elementNoeud].valueFill : 'white';
                const afficheTissuNoeud = isColor(newTissuNoeud) ? newTissuNoeud : "url(#"+newTissuNoeud+")";

                return (
                    <Draggable>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" height="65" preserveAspectRatio="xMinYMin meet">
                        <Tissus />
                            <g>
                                <path id="Noeud" className="pointer" onClick={props.onFill} fill={afficheTissuNoeud} stroke="#000" d="M30.4,30.2c0,0-19-15.5-24.4-11.9s0.8,9.1,0.8,14.1c-0.1,5-7.2,11.8-0.8,15.6c6.4,3.8,25.4-7.9,25.4-7.9
                                        s-0.5,2.7,5.3,2.9c5.8,0.2,7-2.8,7-2.8s5.6,4.1,12.6,5.9c11.3,3.1,4.6-10.4,4.6-10.4s3.7-9.7-2.5-13.3s-15.8,7.5-15.8,7.5
                                        s-2.2-2.4-6.1-2.8C31,26.8,30.4,30.2,30.4,30.2z"/>
                                <path className="fille3" d="M30.4,30.2c0,0,2.1,2.5,1.8,4.8c-0.3,2.3-1,5.2-1,5.2"/>
                                <path className="fille3" d="M42.4,30.1c0,0,1.3,2.8,1.3,5.2c0,2.4-0.2,5.4-0.2,5.4"/>
                                <path className="fille3" d="M25.2,30.4c0,0,6.9,1.9,6.8,3.8c-0.1,1.9-5.7,1.7-5.7,1.7"/>
                                <path className="fille3" d="M43.7,35.3"/>
                                <path className="fille3" d="M50.2,31.1c0,0-6.7,0.9-6.6,3.5c0.1,2.6,7.6,2.7,7.6,2.7"/>
                            </g>

                        </svg>
                    </Draggable>
                )
            }
        }
        </MyChoosenTissue.Consumer>
              
    )
}
export default AccChevNoeud;



import React from 'react';

import CheveuxCourts from './CheveuxCourts.js';
import CheveuxFrises from './CheveuxFrises.js';
import CheveuxChignon from './CheveuxChignon.js';
import CheveuxAnglaises from './CheveuxAnglaises.js';
import CheveuxCouettes from './CheveuxCouettes.js';
import CheveuxRaides from './CheveuxRaides.js';

const MyChevelure = (props) => {


        const coupe = props.coupe;

        if(coupe === 'cheveuxCourts') {
           return(<CheveuxCourts color={props.color}  />)
        }
        else if(coupe === 'cheveuxFrises') {
           return(<CheveuxFrises color={props.color} />)
        }
        else if(coupe === 'cheveuxChignon') {
            return(<CheveuxChignon color={props.color} />)
        }
        else if(coupe === 'cheveuxAnglaises') {
            return(<CheveuxAnglaises color={props.color} />)
        }
        else if(coupe === 'cheveuxCouettes') {
            return(<CheveuxCouettes color={props.color} />)
        }
        else if(coupe === 'cheveuxRaides') {
            return(<CheveuxRaides color={props.color} />)
        }
        else {
            return null;
        }

}


export default MyChevelure;

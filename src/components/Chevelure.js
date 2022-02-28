import React from 'react';

const Chevelure = (props) => {


        const coupe= props.coupe;
        const src = require('./images/'+ coupe +'.svg');
        const action= props.action;

        return(

            <div className="ImagesRadio">
                <input type="radio" value={coupe} name="maCoupe" id={coupe} onClick={action} />
                <label htmlFor={coupe}><img src={src} alt="Chevelure" width="100" height="100" /></label>
            </div>

        )

}


export default Chevelure;

import React from 'react';


const AccessoiresCheveux = (props) => {

    const value = props.value;
    //const count =  props.count;
    //const changeColor = props.changeColor;
    //const isChecked = props.checked;
    const src = require('./images/'+ value +'.svg');
    const action= props.action;


    return(
        <div>
            <div className="ImagesCheckbox">
                <input type="checkbox" value={value.slice(7)} id={value} onClick={action} />
                <label htmlFor={value}><img src={src} alt={value} width="50" height="50" /></label>
            </div>
            
            {/* <div className="input-color-container"><input id={count} type="color" defaultValue="#ffffff" onChange={changeColor} /></div> */}
        </div>

    )

}

export default AccessoiresCheveux;

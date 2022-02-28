import React from 'react';



export default function ColorPalette(props) {

    const Tissus = ['bgFleurs', 'bgEventail', 'bgRoseraie', 'bgCacao', 'bgAntillais', 'bgVichy']

    return (

        <div className="color-palette">
            {Tissus.map(tissu => { 
                const activeClass = props.currentTissu === tissu ? 'color-swatch-active' : '';
                return (
                    <div key={"key"+tissu} onClick={() => {props.changeTissu(tissu)}} name={tissu}>
                        <div className={`color-swatch ${tissu} ${activeClass}`} style={{background: tissu}}></div>
                        
                    </div>
                )
            })}

            <input type="color" onChange="" />
        </div>
        
    )
}
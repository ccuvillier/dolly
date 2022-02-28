import React from 'react';

export default function TissusPalette(props) {
    
    const Tissus = ['bgFleurs', 'orange', 'bgEventail', 'bgRoseraie', 'blue', 'bgCacao', 'bgAntillais', 'bgVichy', 'deeppink']

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
        </div>
    )
}
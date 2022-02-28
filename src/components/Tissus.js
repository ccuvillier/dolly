import React from 'react'

const backFleurs = require('./images/tissuFleurs.jpg');
const backVichy = require('./images/tissuVichy.jpg');
const backAntillais = require('./images/tissuAntillais.jpg');
const backEventail = require('./images/tissuEventail.jpg');
const backCacao = require('./images/tissuCacao.jpg');
const backRoseraie = require('./images/tissuRoseraie.jpg');

export default class Tissus extends React.Component {
    render () {
        return (
            <div>
                <defs>
                    <pattern id="bgFleurs" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backFleurs} height="200" width="200"></image>
                    </pattern>
                </defs>
                <defs>
                    <pattern id="bgVichy" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backVichy} height="200" width="200"></image>
                    </pattern>
                </defs>
                <defs>
                    <pattern id="bgAntillais" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backAntillais} height="200" width="200"></image>
                    </pattern>
                </defs>
                <defs>
                    <pattern id="bgEventail" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backEventail} height="200" width="200"></image>
                    </pattern>
                </defs>
                <defs>
                    <pattern id="bgCacao" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backCacao} height="200" width="200"></image>
                    </pattern>
                </defs>
                <defs>
                    <pattern id="bgRoseraie" x="0" y="0" patternUnits="userSpaceOnUse" height="200" width="200">
                    <image x="0" y="0" xlinkHref={backRoseraie} height="200" width="200"></image>
                    </pattern>
                </defs>

            </div>
        )
    }
}
import React, { Fragment } from "react";

import AccChevNoeud from './accChevNoeud';
import AccChevPerles from './accChevPerles';
import AccChevFoulard from './accChevFoulard';


const MyAccCheveux = (props) => {

	const componentsMap = props.AccChev;
	const colorsMap = props.ColorAccChev;
	const onFill = props.onFill;

	return (
		<Fragment>
		{ 
			componentsMap.map((item, index) => {
				const noeud = (item === 'AccChevNoeud') && <div id={item+index} key={item}><AccChevNoeud onFill={onFill} /></div>;
				const foulard = (item === 'AccChevFoulard') && <div id={item+index} key={item}><AccChevFoulard onFill={onFill} /></div>;
				const perles = (item === 'AccChevPerles') && <div id={item+index} key={item}><AccChevPerles onFill={onFill} /></div>;

				return [noeud, perles, foulard];
			}) 

		}
		</Fragment>
	)

}


export default MyAccCheveux;

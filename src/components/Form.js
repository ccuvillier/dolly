import React, { Fragment } from 'react';
import update from 'react-addons-update';

import FilleNue from './filleNue';

import Chevelure from './Chevelure';
import MyChevelure from './MyChevelure';
import AccessoiresCheveux from './AccessoiresCheveux'; 
import MyAccCheveux from './MyAccCheveux';

//import MyRobe from './RobeBal.js';
import ColorPalette from './ColorPalette';
import {MyChoosenTissue} from './ContextTissue';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

class Form extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            /* show tiroirs */
            showTiroirCheveux: false,
            showTiroirAccessoires: false,

            /* Robes */
            colorRobe1: "#ffffff",
            colorRobe2: "#000000",

            /* cheveux */
            color: "#ffffff",
            coupe: "",
            coupes: ['cheveuxCourts', 'cheveuxFrises', 'cheveuxChignon', 'cheveuxAnglaises', 'cheveuxRaides', 'cheveuxCouettes'],
            listAccChev: [
                {id: 1, value: 'AccChevNoeud'}, 
                {id: 2, value: 'AccChevPerles'}, 
                {id: 3, value: 'AccChevFoulard'}
            ],
            accChev: [],
            fillTissus: [],
            colorTissu: "#ffffff"
        }
        this.addAccChev = this.addAccChev.bind(this);

        this.closeTiroir = React.createRef();
    }



    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    handleCoupe = (e) => {
        this.setState({
            coupe: e.target.value
        })
    }

    handleShow = (e) => {
        const id = e.target.id;
        this.closeTiroir.current.style.zIndex = "1";

        if(id === "coiffure"){ 
            this.setState({
                showTiroirCheveux: !this.state.showTiroirCheveux,
                showTiroirAccessoires: false
            })
        }
        else if(id === "accessoires"){ 
            this.setState({
                showTiroirAccessoires: !this.state.showTiroirAccessoires,
                showTiroirCheveux: false
            })
        }
        else {}
    }
    handleHide = (e) => {
        this.closeTiroir.current.style.zIndex = "-1";
        this.setState({
            showTiroirCheveux: false,
            showTiroirAccessoires: false,
        })
    }
    


    addAccChev = (e) => {
        if(e.target.checked) {// add new hair accessory in state accChev & fillTissus
            this.setState({
                 accChev: [...this.state.accChev, e.target.id],
                 fillTissus: [...this.state.fillTissus, {newId: e.target.value, valueFill: 'white'}]
            })
        }
        else {
            const accChevToRemove = this.state.accChev.indexOf(e.target.id);
            //const tissusToRemove = this.state.fillTissus.indexOf(e.target.value);

            this.setState({
                accChev: this.state.accChev.filter((_, i) => i !== accChevToRemove),
                fillTissus: this.state.fillTissus.filter(item => item.newId !== e.target.value)
            });
        }   
    }
    
    /*handleAccColor = (e) => {
        this.setState(update(this.state, {
            colorAccChev: {
                [e.target.id]: {
                    $set: {value: e.target.value}
                }
            }
        }))
    }*/

    setCurrentTissu = (param) => {
        this.setState({
            currentTissu: param
        })
    }

    onFillTissu = (e) => {
        const newFillTissus = this.state.fillTissus; //creates the clone of the state
        const newCurrentTissus = this.state.currentTissu; // pick the selected tissue in the palette
        
        if(this.state.fillTissus.length > 0){
            // find if element is already in the array
            const idSelected = e.target.id;
            const isPresent = this.state.fillTissus.filter(element => Object.values(element).some(val => typeof val === "string" && val.includes(idSelected)));

            if(isPresent.length > 0) {
                // find the element to update
                const elementTissus = this.state.fillTissus.findIndex(element => element.newId === e.target.id);

                //update the one value
                newFillTissus[elementTissus] = {...newFillTissus[elementTissus], valueFill: newCurrentTissus}
                
                this.setState({
                    fillTissus: newFillTissus
                })
            }
            else {
                console.log('je suis la');
                this.setState({
                    fillTissus: 
                        [...this.state.fillTissus, {newId: e.target.id, valueFill: newCurrentTissus}]
                })
            }
        }
        else {
            console.log('ici');
            this.setState({
                fillTissus: 
                    [{newId: e.target.id, valueFill: newCurrentTissus}]
            },
            () => console.log(this.state.fillTissus))
        }
        this.forceUpdate();
    }


    render(){

        return(
            <Fragment>
                <h1>Ma meilleure copine</h1>

                <div id="canvas">
                    <div id="AccessoiresChev">
                        <MyChoosenTissue.Provider value={this.state.fillTissus}>
                            <MyAccCheveux AccChev={this.state.accChev} onFill={this.onFillTissu} />
                        </MyChoosenTissue.Provider>
                    </div>


                    <div id="cheveux">
                       <MyChevelure coupe={this.state.coupe} color={this.state.color} />
                    </div>

                    {/* <div id="robe">
                        <MyRobe colorRobe1={this.state.colorRobe1} />
                    </div>    */}
                    <div id="poupee">
                        <FilleNue />
                    </div>                    
                </div>




                <div id="control">
                    <div id="poigneeTiroirs">
                        <div id="close" ref={this.closeTiroir} onClick={this.handleHide}></div>
                        <button id="coiffure" onClick={this.handleShow.bind(this)} className={this.state.showTiroirCheveux ? 'open' : ''}>Coiffure</button>
                        <button id="accessoires" onClick={this.handleShow.bind(this)} className={this.state.showTiroirAccessoires ? 'open' : ''}>Accessoires</button>
                    </div>

                    <div id="controlCheveux" className={this.state.showTiroirCheveux ? 'slideInUp' : 'slideOutDown'}>
                        <div className="col">
                            <Carousel id="coupes" responsive={responsive}>
                                {this.state.coupes.map((item) => (
                                    <Chevelure key={item} coupe={item} action={this.handleCoupe} />
                                ))}
                            </Carousel>

                            <div className="couleur"> 
                                <div className="blockCenter">
                                    <label>Couleur : </label>
                                    <div className="input-color-container"><input type="color" value={this.state.color} onChange={this.handleColor} /></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="controlAccessoires" className={this.state.showTiroirAccessoires ? 'slideInUp' : 'slideOutDown'}>
                        <div className="col" id="accessoiresCheveux">
                            { this.state.listAccChev.map((item, index) => (
                                <AccessoiresCheveux key={index} count={index} {...item} action={this.addAccChev} /> 
                                
                                // {changeColor={this.handleAccColor}}
                                )) 
                            }
                        </div>
                        <ColorPalette currentTissu={this.state.currentTissu}  changeTissu={this.setCurrentTissu} changeColor={this.setCurrentTissu} />
                    </div>   
                </div>
            </Fragment>

        )
    }
}

export default Form;
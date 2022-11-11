import "../Dashboard/Dashboard.css";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import productCards from "../../data/products"
import React from "react";
import Popup from "../Popup/Popup";
import chooseImage from "../../helpers/chooseImage";
import navigationItemsObject from "../../data/navigationItems";
class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productCards: [], open: true,
            cardClicked: {},
            editMode: false
        };
    }

    onButtonClicked = () =>{
        this.setState({open: !this.state.open})

    }
    componentDidMount(){
        this.setState({productCards: productCards.products})
    }

    addButtonClicked = (inputFromPopup) => {
        let imageFromHelper = chooseImage(inputFromPopup)

        let toBeAdded = [
            {   
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open
        })
    }

    editButtonClicked = (inputFromPopup) => {
        let productCards = this.state.productCards;
        let newState = productCards.map(product =>{
            if(this.state.cardClicked.id === product.id){
                product.name = inputFromPopup
                return product
            }
            else{
                return product;
            }
        });
        this.setState({productCards: newState, open: true});
    }

    onCardClicked = (idFromCard) => {
        if(this.state.productCards[idFromCard - 1].name === "Placeholder"){
            this.setState({
                editMode: false
            })
        }
        else{
            this.setState({
                editMode: true
            })
        }
        this.setState(
            {
                open: !this.state.open,
                cardClicked: this.state.productCards[idFromCard - 1]
            }
            )

    }
    render(){
    if(this.state.open === true){
    return(<article className="dashboard">
<LeftPane navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium"/>
<RightPane onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een product toe"/>
    </article>
    );
    }
    return(
        <Popup editButtonClicked= {this.editButtonClicked} editMode={this.state.editMode} cardClicked={this.state.cardClicked} addButtonClicked={this.addButtonClicked}/>
    )
    }
}

export default Dashboard;
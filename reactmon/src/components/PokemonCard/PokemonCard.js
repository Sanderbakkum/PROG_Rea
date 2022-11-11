import "./PokemonCard.css";
import React from "react";
class PokemonCard extends React.Component{
     constructor(props){
        super(props);
        this.state = {hp: 0, caughtOrRan: false}
     }

     componentDidMount(){
        this.setState({hp: this.props.pokemonHP})
        
     }

     attack = () =>{
        let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp: 0,
                    caughtOrRan: true,
                })
            }
        });
     }

     catch = () => {
        this.setState({caughtOrRan: true});
        let damagePrecentage = 100 - Math.floor(this.state.hp / this.props.pokemonHP * 100);
        let dice = Math.floor(Math.random() * (100 - 1) + 1);
        if(damagePrecentage > dice){
            this.props.updateCounter();
        }
        
     }
    
     render(){
        let types = this.props.pokemonType.map(function(type){
            return <span key={type} className={`pokemoncard__type pokemoncard__type--${type}`}>{type}</span>
        });
        let buttons = null;
        if(this.state.caughtOrRan === false){
            buttons = 
            <>
                <button onClick={this.attack} className="pokemoncard__button pokemon__button--attack">Attack</button>
                <button onClick={this.catch} className="pokemoncard__button pokemon__button--catch">Catch</button>
            </>
        }
        return(
            <article className="pokemoncard">
                <header className="pokemoncard__header">
                    <h2 className="pokemoncard__title">{this.props.pokemonName}</h2>
                    <div className="pokemoncard__labelwrapper">
                        {types}
                    </div>
                    
                </header>
                <section className="pokemoncard__section">
                    <figure className="pokemoncard__figure">
                    <img src={this.props.pokemonImage} className="pokemoncard__img"></img>
                    </figure>
                    <div className="pokemoncard__h3Wrapper">
                        <h3 className="pokemoncard__HP">{this.state.hp}</h3>
                    </div>
                    
                </section>
                <footer className="pokemoncard__footer">
                    
                    {buttons}
                </footer>
               
            </article>
    
        );
     }
    
}

export default PokemonCard;
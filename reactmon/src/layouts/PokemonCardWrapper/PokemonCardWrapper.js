import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";
function PokemonCardWrapper(props){
    return (
        <section className="pokemonCardWrapper">
            <PokemonCard 
                pokemonName="Gengar" 
                pokemonType={["Ghost","Poison"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png"
                pokemonHP="62"
                updateCounter ={props.updateCounter} 
                />

                <PokemonCard 
                pokemonName="Venusaur" 
                pokemonType={["Grass","Poison"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                pokemonHP="68"
                updateCounter ={props.updateCounter} 
                />

                <PokemonCard 
                pokemonName="Riolu" 
                pokemonType={["Fighting"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png"
                pokemonHP="48"
                updateCounter ={props.updateCounter} 
                />

                <PokemonCard 
                pokemonName="Mudkip" 
                pokemonType={["Water"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/258.png"
                pokemonHP="27"
                updateCounter ={props.updateCounter} 
                />
          

        </section>
    )
}

export default PokemonCardWrapper;
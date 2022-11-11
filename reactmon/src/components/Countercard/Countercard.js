import "./Countercard.css";
function Countercard({counter}){
    return(
        <section className="countercard">
            <h2 className="countercard__h2">{counter}</h2>
        </section>
    );
}

export default Countercard
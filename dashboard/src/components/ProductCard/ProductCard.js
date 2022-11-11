const ProductCard = (props) =>{
    
    const productCardsClicked = () => {
        props.onCardClicked(props.id)
    }
    return (
        <li onClick={productCardsClicked} className="productsList__item productsList__item--gray">
            <img className="productsList__image" src={props.productImg} alt={props.name} />
            <div className="productsList__fade">
                <p className="productsList_imageText">{props.name}</p>
            </div>
        </li>
    );
}
export default ProductCard;
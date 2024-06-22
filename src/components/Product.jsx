const Product = ({ imageUrl, name, stars, description, price }) => {
    return (
      <div className="product">
        <img src={imageUrl} alt={name}/>
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>${price}</p>
      </div>
    );
};

export default Product;
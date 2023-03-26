const ProductsList = ({productsData}) => {
   return (
    <ul className="products" >
    {
        productsData.map( product => 
            <li
            key={product.id}
            className="productCard">
                <h1 className="productCard__name" > {product.name} </h1>
                <div className="productCard__dataBlock" >
                    <div className="productCard__container--categories" >
                        <h2 className="productCard__attribute" >
                            Category: 
                        </h2>
                        <div className="productCard__categories">
                            <span className="productCard__data badge" > {product.category} </span>
                        </div>
                    </div>
                    <h2 className="productCard__data" ><span className="productCard__attribute" >Price: </span>{product.price}</h2>
                    <h2 className="productCard__data" ><span className="productCard__attribute" >Available: </span>
                    {(product.isAvailable ? "On stock" : "Out of stock")}
                    </h2>
                </div>
                <div className="productCard__buttons">
                    <button 
                    onClick = { () => remove }
                    className="productCard__button" ><i className='bx bxs-trash'></i></button>
                    <button className="productCard__button" ><i className='bx bx-edit-alt'></i></button>
                </div>
            </li>
        )
    }
   </ul>
   )
};

export default ProductsList;
const ProductsList = ({productsToRead, removeProduct}) => {
   return (
    <ul className="products" >
    {
        productsToRead.map( productToDelete => 
            <li
            key={productToDelete.id}
            className="productCard">
                <h1 className="productCard__name" > {productToDelete.name} </h1>
                <div className="productCard__dataBlock" >
                    <div className="productCard__container--categories" >
                        <h2 className="productCard__attribute" >
                            Category: 
                        </h2>
                        <div className="productCard__categories">
                            <span className="productCard__data badge" > {productToDelete.category} </span>
                        </div>
                    </div>
                    <h2 className="productCard__data" ><span className="productCard__attribute" >Price: </span>{productToDelete.price}</h2>
                    <h2 className="productCard__data" ><span className="productCard__attribute" >Available: </span>
                    {(productToDelete.isAvailable ? "On stock" : "Out of stock")}
                    </h2>
                </div>
                <div className="productCard__buttons">
                    <button 
                    onClick = { () => removeProduct(productToDelete) }
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
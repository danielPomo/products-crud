import React from 'react';
import { useForm } from 'react-hook-form';


const ProductsForm = ({createProduct}) => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    
    const submit = ( data ) => {
       data.id = Date.now()
       createProduct(data)
       emptyForm()
    }
    // const fillFormWithDefaultInfo = () => {
    //     reset ( 
    //         {
    //             category: "Bags",
    //             isAvailable: false,
    //             name: "Gucci Handbag Summer Edition",
    //             price: "526,99"
    //         }
    //     )
    // }
    const emptyForm = () => {
        reset ( 
            {
                category: "",
                isAvailable: false,
                name: "",
                price: ""
            }
        )
    }

    return (
        <form 
        onSubmit = { handleSubmit ( submit ) }
        className='productForm'>
            <h1 className='productForm__title' >Create or Update Product</h1>
            <div className='productForm__fields' >
                <div className='productForm__field' >
                    <label className='productForm__attribute' htmlFor="productName">Product Name:</label>
                    <input
                    {...register("name", {required: true, minLength: 10})}
                    className='productForm__input'
                    placeholder='Luxury Summer Bag B-15'
                    id='productName' type="text" />
                    {errors.name?.type === "required" && <p>The product name is required, and must be at least 10 characters long</p> }
                    {errors.name?.type === "minLength" && <p>The product name must be at least 10 characters long</p> }
                </div>
                <div className='productForm__field' >
                    <label className='productForm__attribute' htmlFor="productCategory">Category:</label>
                    <input
                    {...register("category", {required: true})}
                    className='productForm__input'
                    placeholder='Bags'
                    id='productCategory' type="text" />
                    {errors.category?.type === "required" && <p>The product category is requiered</p> }
                </div>
                <div className='productForm__field' >
                    <label className='productForm__attribute' htmlFor="productPrice">Price: </label>
                    <input
                    {...register("price", {required: true})}
                    className='productForm__input'
                    pattern = {"^[0-9]+([,][0-9]+)?$"}
                    placeholder = "2425,99"
                    id='productPrice' type="text" />
                    {errors.price?.type === "required" && <p>The product price is requiered, it can be an integer or decimal number using " , "</p> }
                </div>
                <div>
                    <label className='productForm__attribute' htmlFor="">Available </label>
                    <input
                    {...register("isAvailable")}
                    className='productForm__input' 
                    type="checkbox" name="" id="" />
                </div>
            </div>
            <button 
            onClick = { () => {} }
            className='productForm__button' type="submit">Submit</button>
        </form>
    );
};

export default ProductsForm;
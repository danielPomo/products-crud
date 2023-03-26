import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const ProductsForm = ({createProduct, productInfoToEdit, updateProduct}) => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    
    const submit = ( product ) => {
       if (productInfoToEdit) {
        updateProduct(product)
       } else {
        createProduct(product)
        emptyForm()
       }
    }
    
    useEffect( () => {
        if (productInfoToEdit) {
            reset (productInfoToEdit)
        } 
        else {
            emptyForm()
        }
    }, [productInfoToEdit])

    const emptyForm = () => {
        reset ( 
            {
                category: "",
                name: "",
                isAvailable: false,
                price: ""
            }
        )
    }

    return (
        <form 
        onSubmit = { handleSubmit ( submit ) }
        className='productForm'>
            <div className='productForm__container'>
            <h1 className='productForm__title' >Create or Update Product</h1>
            <div className='productForm__fields' >
                <div className='productForm__field' >
                    <label className='productForm__attribute' htmlFor="productName">Product Name:</label>
                    <input
                    {...register("name", {required: true})}
                    className='productForm__input'
                    placeholder='Luxury Summer Bag B-15'
                    id='productName' type="text" />
                    {errors.name?.type === "required" && <p>The product name is required</p> }
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
                    pattern = {"^[0-9]+([.][0-9]+)?$"}
                    placeholder = "2425.99"
                    id='productPrice' type="text" />
                    {errors.price?.type === "required" && <p>The product price is requiered, it can be an integer or decimal number using " . "</p> }
                </div>
                <div>
                    <label className='productForm__attribute' htmlFor="productAvailable">Available </label>
                    <input
                    {...register("isAvailable")}
                    className='productForm__input' 
                    type="checkbox" name="isAvailable" id="productAvailable" />
                </div>
            </div>
            <button 
            onClick = { () => {} }
            className='productForm__button' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ProductsForm;
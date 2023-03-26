import './App.css'
import ProductsList from './components/ProductsList'
import ProductsForm from './components/ProductsForm'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [productBeingEdited, setProductBeingEdited] = useState(null)

  useEffect ( () => {
    getData()
  }, [] )

  const getData = () => {
    axios
    .get("https://products-crud.academlo.tech/products/")
    .then(resp => setProducts(resp.data))
    .catch(error => console.log(error))
  }
  
  const createUserNewInfo = (data) => {
    axios
    .post("https://products-crud.academlo.tech/products/", data)
    .then( () => getData() )
    .catch( (error) => console.log(error) )
  }

  const deleteProduct = (productToDelete) => {
    axios
    .delete(`https://products-crud.academlo.tech/products/${productToDelete}/`)
    .then( () => getData() )
    .catch( error => console.log(error) )
  }

  const editProduct = (productToEdit) => {
    setProductBeingEdited(productToEdit)
  }

  const updateProductInfo = (productInfoToEdit) => {
    axios
    .put( `https://products-crud.academlo.tech/products/${productInfoToEdit.id}/`, productInfoToEdit )
    .then( () => {
      getData()
      setProductBeingEdited(null)
    } )
    .catch( error => console.log(error) )
    }


  return (
    <div className="App">
      <ProductsForm
      createProduct = { (data) => createUserNewInfo(data) }
      productInfoToEdit = { productBeingEdited }
      updateProduct = { (productInfoToEdit) => updateProductInfo(productInfoToEdit) }
      />
      <ProductsList
      productsToRead = {products}
      removeProduct = { (productToDelete) => deleteProduct(productToDelete) }
      editProductInfo = { (productToEdit) => editProduct (productToEdit) }
      />
    </div>
  )
}

export default App

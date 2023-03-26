import './App.css'
import ProductsList from './components/ProductsList'
import ProductsForm from './components/ProductsForm'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([
    {
      category: "Bags",
      isAvailable: false,
      name: "Gucci Handbag Summer Edition",
      price: "526,99",
      id: 1024
  }
  ])

  const createUserNewInfo = (data) => {
    setProducts([...products, data])
  }

  const deleteProduct = (productToDelete) => {
    let filteredProducts = products.filter( ( item ) => item !== productToDelete)
    setProducts (filteredProducts)
  }

  return (
    <div className="App">
      <ProductsForm
      createProduct = { (data) => createUserNewInfo(data) }
      />
      <ProductsList
      productsToRead = {products}
      removeProduct = { (productToDelete) => deleteProduct(productToDelete) }
      />
    </div>
  )
}

export default App

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
    setproducts([...products, data])
  }

  return (
    <div className="App">
      <ProductsForm
      createProduct = { (data) => createUserNewInfo(data) }
      />
      <ProductsList
      productsData={products}
      />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import ProductList from './Components/ProdectList'
import Axios from 'axios';




function App() {

  const [prodectDetails, setprodectDetails] = useState([])

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then((response) => {
      setprodectDetails(response.data)
    }
    )
    .catch((error) => console.error("Error fetching data:", error));

  }, []
  )

  return (
    <>
      <NavigationBar/>
      <Filters data={prodectDetails}/>
      <div className="div20">
        <ProductList prodectData={prodectDetails}/>
      </div>
    </>
  )
}

export default App

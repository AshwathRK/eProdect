import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import ProductList from './Components/ProdectList'
import Axios from 'axios';




function App() {

  const [prodectDetails, setprodectDetails] = useState([])
  const [filterdCatugory, setFilterdCatugory] = useState([])

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then((response) => {
      setprodectDetails(response.data)
    }
    )
    .catch((error) => console.error("Error fetching data:", error));

  }, []
  )

  const categoryFilter = (checkedCategory) => {
    const filtered = checkedCategory
      .filter((category) => category.isChecked) // Only keep checked categories
      .flatMap((category) =>
        productDetails.filter((product) => product.title === category.value)


      // need to change this function here is the issue <<<<==================>>>>>>
      );
  
      setFilterdCatugory(filtered);
  };

  return (
    <>
      <NavigationBar/>
      <div className='filter-con w-full flex'>
      <Filters data={prodectDetails} filterFunction={categoryFilter}/>
      <div className="container">
        <ProductList prodectData={prodectDetails}/>
      </div>
      </div>
    </>
  )
}

export default App

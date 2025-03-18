import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import ProductList from './Components/ProdectList'
import Axios from 'axios';
import { createContext } from 'react'
import AddToCardModel from './Components/AddToCardModel';


export const AppContext = createContext()

function App() {

  const [productDetails, setprodectDetails] = useState([])
  const [filteredCategory, setFilteredCategory] = useState([])

  const [addToCardPopup, setaddToCardPopup] = useState("modelPopup-down")

  const addModelPopup=()=>{
    setaddToCardPopup((prevDrag) => (prevDrag === "modelPopup-down" ? "modelPopup-open" : "modelPopup-down"));
  }

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then((response) => {
      setprodectDetails(response.data)
    }
    )
      .catch((error) => console.error("Error fetching data:", error));

  }, []
  )

  // const categoryFilter = (checkedCategories) => {
  //   if (checkedCategories && checkedCategories.length > 0) {
  //     const filtered = productDetails.filter((product) =>
  //       checkedCategories.some((category) => category.isChecked && product.title === category.value)
  //     );
  //     //Here is the issue
  //     setFilteredCategory(filtered.length > 0 ? filtered : productDetails);
  //   } else {
  //     setFilteredCategory(productDetails);
  //   }
  // };  

  //filterFunction={categoryFilter}

  return (
    <>
      <div>
        <NavigationBar onClick={addModelPopup}/>
        <AppContext.Provider value={{ productDetails, setprodectDetails, filteredCategory, setFilteredCategory }}>
          <div className='filter-con w-full flex'>
            <Filters/>
            <div className="container">
              <ProductList />
            </div>
          </div>
        </AppContext.Provider>
        <AddToCardModel className={addToCardPopup}/>
      </div>
    </>
  )
}

export default App

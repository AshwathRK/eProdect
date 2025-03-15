import { useEffect, useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavigationBar'
import Filters from './Components/Filter';
import Axios from 'axios';

function App() {

  const [category, setCatrgory] = useState([])
  const [unicCategory, setUnicCategory] = useState([])

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then((response) => {
      setCatrgory(response.data)
    }
    )
    .catch((error) => console.error("Error fetching data:", error));

  }, []
  )

  for (let index = 0; index < category.length; index++) {
    console.log(category[index]);
    
  }

  const [count, setCount] = useState(0)
  return (
    <>
      <NavigationBar />
      <Filters data={category}/>
    </>
  )
}

export default App

import { useState } from 'react';
import Clothes from './Clothes';
import { data } from "./data";
import './App.css';
import Buttons from './buttons';



function App() {
  const [clothes,setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  
  return(
    <div>
      <div className='cont'>
        <h2 className='back'>Standart Free Shipping</h2>
      </div>
    <Buttons filteredClothes = {chosenClothes} />
    <Clothes items={clothes}/>
    </div>
  )
}

export default App;

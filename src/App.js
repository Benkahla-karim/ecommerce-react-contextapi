import './App.css';
import Slidebar from './components/Slidebar';
import Home from './components/Home';
import Bagslid from './components/Bagslid';
import { useState } from 'react';
import ContextProvider from './Context/bag-context';
import { createContext } from 'react';
import { BagContext } from './Context/bag-context';

function App() {
  const [BagItems,setBagItems] = useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  
   



  return (
    <div className="container">
    <BagContext.Provider value={{BagItems,setBagItems,totalPrice,setTotalPrice}} >
        <Slidebar  />
          <Home />
          <Bagslid/>
    </BagContext.Provider>
    </div>
  );
}

export default App;


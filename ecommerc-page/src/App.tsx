import { useState } from 'react'
import Header from './components/Header'
import './styles/css/style.css'

import ProductPresentation from './components/ProductPresentation'

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  return (
    <div className="App">
      <div className={`background-mask ${menuIsOpen ? 'active' : null}`} onClick={()=>setMenuIsOpen(false)}></div>
      <Header handleMenuToggle={(isOpen)=>setMenuIsOpen(isOpen)} menuIsOpen={menuIsOpen}/>
      <ProductPresentation/>
    </div>
  )
}
export default App
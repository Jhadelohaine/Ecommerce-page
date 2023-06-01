import './styles/css/style.css'

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  return (
    <div className="App">
      <Header/>
      <div className={`background-mask ${menuIsOpen ? 'active' : null}`} onClick={()=>setMenuIsOpen(false)}></div>
      <Header handleMenuToggle={(isOpen)=>setMenuIsOpen(isOpen)} menuIsOpen={menuIsOpen}/>
    </div>
  )
}




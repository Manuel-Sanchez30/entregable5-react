
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Pokedex from './assets/pages/Pokedex'
import ProtectedRoutes from './assets/pages/ProtectedRoutes'
import PokedexName from './assets/pages/PokedexName'

function App() {
  

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/:name" element={<PokedexName/>}/>  
          </Route>
        

        
      </Routes>

    </div>
  )
}

export default App

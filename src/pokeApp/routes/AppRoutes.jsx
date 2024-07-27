import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PokemonsDetailContainer from '../components/PokemonsDetailContainer/PokemonsDetailContainer'
import Favorites from '../pages/Favorites'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='pokemon/:pokemonName' element={ <PokemonsDetailContainer /> } />
      <Route path='favorites' element={ <Favorites /> } />
      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}

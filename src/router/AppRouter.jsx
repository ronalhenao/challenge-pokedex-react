import { Route, Routes } from 'react-router-dom'
import AppRoutes from '../pokeApp/routes/AppRoutes'

export default function AppRouter() {
  return (
    <>
      <Routes>
        {/* PokeApp */}
        <Route path='/*' element={ <AppRoutes /> } />
      </Routes>
    </>
  )
}

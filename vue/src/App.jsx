import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import {
  HOME,
  PRODUITS,
  CONCESSIONNAIRES,
  INVESTISSEURS,
  POINTS_VENTE,
  CONTACT,
} from './services/navigation.js'
import Principale from './pages/principale.jsx'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

    return (
        <div className='app-root'>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Principale onglet={HOME} />} />
                    <Route path='/produits' element={<Principale onglet={PRODUITS} />} />
                    <Route path='/concessionnaires' element={<Principale onglet={CONCESSIONNAIRES} />} />
                    <Route path='/investisseurs' element={<Principale onglet={INVESTISSEURS} />} />
                    <Route path='/nos-points-de-vente' element={<Principale onglet={POINTS_VENTE} />} />
                    <Route path='/contact' element={<Principale onglet={CONTACT} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App

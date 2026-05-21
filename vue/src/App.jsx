import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HOME, PRODUITS } from './pages/principale.jsx'
import { CONCESSIONNAIRES, INVESTISSEURS } from './pages/principale.jsx'
import { ACTUALITES, CONTACT } from './pages/principale.jsx'
import Principale from './pages/principale.jsx'
import './App.css'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Principale onglet={HOME} />} />
                <Route path='/produits' element={<Principale onglet={PRODUITS} />} />
                <Route path='/concessionnaires' element={<Principale onglet={CONCESSIONNAIRES} />} />
                <Route path='/investisseurs' element={<Principale onglet={INVESTISSEURS} />} />
                <Route path='/actualites' element={<Principale onglet={ACTUALITES} />} />
                <Route path='/contact' element={<Principale onglet={CONTACT} />} />
            </Routes>
        </Router>
    )
}

export default App

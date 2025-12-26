import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Academics from './pages/Academics'
import Infrastructure from './pages/Infrastructure'
import Faculty from './pages/Faculty'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function App() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <Header />
            <main className="flex-grow pt-24">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/infrastructure" element={<Infrastructure />} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App

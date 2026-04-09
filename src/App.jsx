import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AboutMe } from './AboutMe'
import { Top10 } from './Top10'
import { CookieClicker } from './CookieClicker'
import { Pokemon } from './Pokemon'
import { Navbar } from "./Navbar";
import { Gallery } from "./Gallery";
import { FAQ } from './FAQ'

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <AboutMe />
      <Top10 />
    </main>
  )
}

function Games() {
  return (
    <main>
      <h1>Games</h1>

      <div className="content">
        <CookieClicker />
        <Pokemon />
      </div>

      <Gallery />
    </main>
  )
}

function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <FAQ />
    </main>
  )
}

function App() {
  return (
    <main className="app">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
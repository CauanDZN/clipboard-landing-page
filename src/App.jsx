import { useEffect } from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Accessibility } from './components/sections/Accessibility'
import { Brands } from './components/sections/Brands'
import { Install } from './components/sections/Install'
import { KeepTrack } from './components/sections/KeepTrack'
import { Showcase } from './components/sections/ShowCase'
import { Tools } from './components/sections/Tools'
import './styles/main.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Showcase />
        <KeepTrack />
        <Accessibility />
        <Tools />
        <Brands />
        <Install />
      </main>

      <Footer />
    </>
  )
}

export default App

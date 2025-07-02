import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileNav } from './components/MobileNav'
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import Projects from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import Footer from './components/Footer';

const App = () => {

  const [openMenu, setMenu] = useState(false);

  return (
    <div>
      <Navbar openMenu={openMenu} setMenu={setMenu} />
      <MobileNav openMenu={openMenu} setMenu={setMenu} />

      <div className="max-w-5xl mx-auto p-5">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />

    </div>
  )
}

export default App

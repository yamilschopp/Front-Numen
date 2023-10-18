
import React, { useState } from 'react';


function NavbarProject() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Theme state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    // Toggle the theme between 'light' and 'obscure'
    const newTheme = theme === 'light' ? 'obscure' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav className=  {`${theme} z-20 fixed md:static w-full md:w-auto shadow-lg md:shadow-none`} >
    <div className='container mx-auto'>
      <div className={`nav-container ${menuOpen ? 'active' : ''}`}>
        {/* imagen/logo */}
        <div className='z-20'>
          <img src="./image/codeburger-logo.png" alt="Photo"/>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* cuerpo de menu */}
        <div>
          {/* boton responsive */}
          <input type='checkbox' name='hamburguer' id='hamburguer' className='peer' hidden/>
          <label for='hamburguer' className='peer-checked:hamburguer block z-20 cursor pointer md:hidden transition p-5 rounded'>
            <div className='h-0.5 w-6 ml-60 bg-black transition'></div>
            <div className='mt-2 h-0.5 w-6 ml-60 bg-black transition'></div>
          </label>

          {/* boton de enlaces */}
          <div className={`${theme} w-1/3 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:translate-x-0 md:flex-row md:shadow-none`}>
            <div className='px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0 '>
              <a
                className="tracking-wide cursor-pointer px-3 py-2 transition nav-link"
                href="HTML/home.html"
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
              >
                Home
              </a>

              <a className="tracking-wide cursor-pointer px-3 py-2 transition nav-link" href="#about" onClick={closeMenu}>
                Products
              </a>

              <a className="tracking-wide cursor-pointer px-3 py-2 transition nav-link" href="#bingo" onClick={closeMenu}>
                Contact
              </a>
            </div>

          </div>
        </div>
        <div>
          <button id="darkButton" onClick={toggleTheme}>Dark</button> 
          <button id="lightButton" onClick={toggleTheme}>Light</button>
        </div>
      </div>

    </div>
  </nav>
  );
}

export default NavbarProject;
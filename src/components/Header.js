import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Header() {

const [activeSection, setActiveSection] = useState('about')

const handleClick = (e) => {
  
  setActiveSection(e.target.dataset.section)
}

  return (
    <header>
        <h1>Desmond Saelee</h1>
        <nav>
            <ul onClick={handleClick}>
                <li><Link to="/" data-section='about' className= {activeSection === 'about' ? 'active': ''}>About me</Link></li>
                <li><Link to="/portfolio" data-section='work' className= {activeSection === 'work' ? 'active': ''}>Work</Link></li>
                <li><Link to="/contact" data-section='contact' className= {activeSection === 'contact' ? 'active': ''}>Contact Me</Link></li>
                <li><Link to="/hero" data-section='resume' className= {activeSection === 'resume' ? 'active': ''}>Resume</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
import React, {useState} from 'react'



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
                <li><a href="#About Me" data-section='about' className= {activeSection === 'about' ? 'active': ''}>About me</a></li>
                <li><a href="#Work" data-section='work' className= {activeSection === 'work' ? 'active': ''}>Work</a></li>
                <li><a href="#Contact Me" data-section='contact' className= {activeSection === 'contact' ? 'active': ''}>Contact Me</a></li>
                <li><a href="#Work" data-section='resume' className= {activeSection === 'resume' ? 'active': ''}>Resume</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
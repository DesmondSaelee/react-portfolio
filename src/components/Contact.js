import React, { useState } from 'react'

//  onBlur event is good for forms when focusing then not focusing.


function Contact() {

    // const [activeSection, setActiveSection] = useState('about')

    // const handleClick = (e) => {

    //   setActiveSection(e.target.dataset.section)
    // }

    return (
        <>
        <div className="container" >
            <h3> Contact Form</h3>
            <form id='contactForm'>
                
                <label for="fname">Full name:</label>
                <div>
                <input type="text" id="fname" name="fname" style={{width:"200px"}} /> 
                </div>
                
                <label for="lname">Email:</label>
                <div>
                <input type="text" id="lname" name="lname" style={{width:"200px"}} /> 
                </div>
             
                <label for="lname">Message:</label>
                <div>
                <textarea id="w3review" name="w3review" rows="4" cols="50" />
                </div>

                
            </form>
        </div>
        </>


    )
}

export default Contact
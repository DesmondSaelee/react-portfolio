import React from 'react'

function Main() {
    return (
        <div>
            <div className="container">
                <h3 id="About Me">About Me</h3>
                <section className="paragraph">

                    <p>I'm Desmond Saelee. I'm a fullstack web developer. I specialize in javascript and MERN developing.
                        I'm always looking to expand my horizons. If something catches your eye it is worth stopping to take a look.
                    </p>

                    
                </section>

            </div>

            <div className="container">
                <h3 id="Work">Work</h3>

                <section className="paragraph">
                    <div id="html-refactoring">
                        <p id="refactor-link"><a href="https://desmondsaelee.github.io/html-refactoring/" target="">HTML Refactoring: HTML/CSS</a></p>
                    </div>

                    <section className='bottomContainer'>
                        <div className="applications" id="Password-Generator">
                            <p className="query"><a href="https://desmondsaelee.github.io/Password-Generator/" target="">Password-Generator: Javascript</a>

                            </p>




                        </div>

                        <div className="applications" id="work-calendar">
                            <p className="query"><a href="https://desmondsaelee.github.io/work-calendar/" target="">work-calendar: Jquery/Day.js</a></p>



                        </div>

                        <div className="applications" id="weather-and-music">
                            <p className="query"><a href="https://desmondsaelee.github.io/weather-and-music" target="">weather-and-music: HTML/Javascript</a></p>



                        </div>

                        <div className="applications" id="Note-Taker">
                            <p className="query"><a href="https://desmond-notetaker.herokuapp.com/" target="">Note-Taker: db.json/Heroku</a></p>



                        </div>

                        <div className="applications" id="Take-A-Hike">
                            <p className="query"><a href="https://takeahike-bootcamp.herokuapp.com/" target="">Take-A-Hike: MVC</a></p>



                        </div>



                    </section>



                </section>
            </div>
        </div>
                )
}

export default Main
import React from "react";

export default function Home() {
  return (
    <section className="home" id="home">
        <div className="home__main">    
            <div className="home__info">    
                <h1 className="home__title">Front - End Web Developer👌</h1>
                <p className="home__descriptive">Hey there, I'm Kevin Do, a Front-end Developer in sunny Tampa, Florida 🌞. I'm all about turning code into captivating web experiences. Let's dive into the world of web enchantment! 💻</p>
                <div className="home__icon__profile">
                    <a target="_blank" href="https://www.linkedin.com/in/kevindo2801/"><i className="fab fa-linkedin"></i> </a>
                    <a target="_blank" href="https://github.com/KevinDo2801?tab=repositories"><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="home__avatar">
                <img src="./main_avatar.png" alt="my avatar" />
            </div>
        </div>
        <div className="home__tech">
            <span>Tech Stack</span>
            <span>|</span>
            <img src="./assets/HTML5_Badge.png" alt="html" />
            <img src="./assets/css_Badge.png" alt="css" />
            <img src="./assets/js_Badge.png" alt="js" />
            <img src="./assets/React-icon.png" alt="react" />
            <img src="./assets/tailwind-css.png" alt="tailwind" />
            <img src="./assets/scss_Badge.png" alt="scss" />
        </div>
    </section>
  );
}
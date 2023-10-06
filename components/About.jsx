import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
        <div className="about__img">
            <img src="../assets/about-img.jpg" alt="about me" />
        </div>
        <div className="about__me">
            <h3 className="section__title">ABOUT ME</h3>
            <h2 className="sub__title">A dedicated Front-end Developer based in Tampa, Florida🌞</h2>
            <p className="about__descriptive">As a Front-End Developer, I'm proficient in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel at crafting responsive, user-friendly websites and enjoy collaborating in teams to build top-notch web applications.</p>
        </div>
    </section>
  );
}

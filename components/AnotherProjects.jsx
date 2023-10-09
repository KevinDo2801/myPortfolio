import React, { useEffect } from "react";
import data from "../data_projects";
import 'jquery';
import "../OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css"
import "../OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css"

export default function AnotherProjects() {
  const anotherProjects = data.slice(3, 9);

  useEffect(() => {
    $(".another_portfolio.owl-carousel").owlCarousel({
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }, []);

  return (
    <section className="another_projects">
      <h3 className="section__title">ANOTHER PROJECT</h3>
      <h2 className="sub__title">A selection of my range of work 😳</h2>

      <div className="another_portfolio owl-carousel owl-theme">
        {anotherProjects.map((project) => (
          <a target="_blank" href={project.web} className="portfolio__selection item" key={project.id}>
            <img src={`../assets/${project.img}`} alt={project.alt} className="portfolio__img" />
          </a>
        ))}
      </div>
    </section>
  );
}

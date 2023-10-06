import React from "react";

export default function Contact() {

  return (
    <section className="contact" id="contact">
      <h3 className="section__title">CONTACT</h3>
      <h2 className="sub__title">Don't hesitate! Get in touch with me!👇</h2>

      <div className="contact__main">
        <div className="contact__item">
            <i className="fa fa-map-marked-alt"></i>
            <div className="location__item">
                <h4>Location</h4>
                <p>Tampa, Florida</p>
            </div>
        </div>

        <div className="contact__item">
            <i className="fa fa-envelope-open-text"></i>
            <div className="mail__item">
                <h4>Mail</h4>
                <p>kietdo172@gmail.com</p>
            </div>
        </div>
      </div>
    </section>
  );
}

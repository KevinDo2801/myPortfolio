import React, { useEffect } from "react";

function BackToTop() {
  const offset = 300;
  const offsetOpacity = 1200;

  useEffect(() => {
    const handleScroll = () => {
      checkBackToTop();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkBackToTop = () => {
    const windowTop = window.scrollY || document.documentElement.scrollTop;
    const backTop = document.querySelector(".js-cd-top");

    if (backTop) {
      if (windowTop > offset) {
        backTop.classList.add("cd-top--is-visible");
      } else {
        backTop.classList.remove("cd-top--is-visible");
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="back-to-top js-cd-top" onClick={handleClick}>
      <i className="fa fa-angle-up"></i>
    </button>
  );
}

export default BackToTop;

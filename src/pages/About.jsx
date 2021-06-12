import React, { useRef, useEffect } from "react";
import FirstSectionAbout from "../components/aboutSections/FirstSectionAbout.jsx";
import SecondSectionAbout from "../components/aboutSections/SecondSectionAbout.jsx";
import ThirdSectionAbout from "../components/aboutSections/ThirdSectionAbout.jsx";
import FourthSectionAbout from "../components/aboutSections/FourthSectionAbout.jsx";
function About(props) {
  return (
    <>
      <FirstSectionAbout />
      <SecondSectionAbout />
      <ThirdSectionAbout />
      <FourthSectionAbout />
    </>
  );
}

export default About;

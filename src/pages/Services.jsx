import React from "react";
import Orders from "../components/serviceSections/Orders.jsx";
import FirstSectionService from "../components/serviceSections/FirstSectionService.jsx";
import SecondSectionService from "../components/serviceSections/SecondSectionService.jsx";
function Services() {
  return (
    <>
      <FirstSectionService />
      <SecondSectionService />
      <Orders />
    </>
  );
}

export default Services;

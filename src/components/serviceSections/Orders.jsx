import React from "react";
import styled from "styled-components";
import Sections from "./Sections.jsx";
import MyOrder from "./MyOrder.jsx";
import SideBar from "./SideBar.jsx";

const CardCategories = {
  CardDrinkCoffee: ["Capsule", "Filter", "Espresso"],
  CardDrinkCoffeeText: [
    "Compatible with Nespresso Systems and similar brewers.",
    "for pour over or drip methods like Aeropres. Chemex, and V60.",
    "Dense and finely ground beans for an intense, flavorful experience.",
  ],
  CardTypeCoffee: ["Origin", "Decaf", "Blended"],
  CardTypeCoffeeText: [
    "Distinct, high quality coffee from a specific family-owned farm",
    "Just like regular coffee, except the caffeine has been removed",
    "Combination of two or three dark roasted beans of organic coffees",
  ],
  CardWouldYouLike: ["200g", "500g", "1000g"],
  CardWouldYouLikeText: [
    "Perfect for the solo drinker. Yields about 12 delicious cups.",
    "Perfect option for a couple. Yields about 40 delectable cups.",
    "Perfect for offices and events. Yields about 90 delightful cups.",
  ],
  CardGrindThem: ["Wholebean", "Filter", "Cafetiére"],
  CardGrindThemText: [
    "Best choice if you cherish the full sensory experience.",
    "For drip or pour-over coffee methods such as V60 or Aeropress.",
    "Course ground beans specially suited for french press coffee.",
  ],
  CardDelivere: ["Every week", "Every 2 week", "Every month"],
  CardsDelivereText: [
    "$14,00 per shipment. Includes free first-class shipping.",
    "$17.25 per shipment. Includes free priority shipping.",
    "$22.50 per shipment. Includes free priority shipping.",
  ],
};

const StyledOrders = styled.div`
  position: relative;
  margin-left: 70px;
  margin-right: 70px;
`;
function Orders() {
  return (
    <StyledOrders>
      {/* <SideBar /> */}
      <Sections
        title="Which do you drink coffee?"
        ancla={0}
        array={CardCategories.CardDrinkCoffee}
        arrayText={CardCategories.CardDrinkCoffeeText}
        name="sect1"
        lastSection={false}
      />
      <Sections
        title="What type of coffee?"
        ancla={0}
        array={CardCategories.CardTypeCoffee}
        arrayText={CardCategories.CardTypeCoffeeText}
        name="sect2"
      />
      <Sections
        title="How much would you like?"
        ancla={0}
        array={CardCategories.CardWouldYouLike}
        arrayText={CardCategories.CardWouldYouLikeText}
        name="sect3"
        lastSection={false}
      />
      <Sections
        title="Want us to grind them?"
        ancla={0}
        array={CardCategories.CardGrindThem}
        arrayText={CardCategories.CardGrindThemText}
        name="sect4"
        lastSection={false}
      />
      <Sections
        title="How often should we deliver?"
        ancla={0}
        array={CardCategories.CardDelivere}
        arrayText={CardCategories.CardsDelivereText}
        name="sect5"
        lastSection={true}
      />
      <MyOrder />
    </StyledOrders>
  );
}

export default Orders;

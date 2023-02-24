import React from "react";

function Hero({ heroName }) {
  if (heroName === "JOKER") {
    throw new Error("Not a hero");
  }
  return <div>Hero {heroName}</div>;
}

export default Hero;

import React from "react";
import Cards from "../Cards/Cards";

export default function WhyUsCards() {
  const CardsData = [
    {
      icon: "src/assets/CardsIcon/Frame 5.png",
      title: "Affordability",
      text: "We provide the most affordable prices for all products in comparison to current market rates.",
    },
    {
      icon: "src/assets/CardsIcon/Frame 6.png",
      title: "Systematic Growth",
      text: "You can achieve consistent growth of your investment with our SIP in Gold with no lock-in time.",
    },
    {
      icon: "src/assets/CardsIcon/Frame 7.png",
      title: "Guaranteed Purity",
      text: "We pledge to provide you with the cleanest 24-karat products that are 99.9% pure and BIS. Hallmark",
    },
    {
      icon: "src/assets/CardsIcon/Frame 4.png",
      title: "Security",
      text: "We supply our clients with the greatest and most reliable vault keepers who offer storage and transaction security.",
    },
    {
      icon: "src/assets/CardsIcon/accessibility-icon.png",
      title: "Accessibility",
      text: "We offer all services to our clients around-the-clock, everywhere",
    },
    {
      icon: "src/assets/CardsIcon/Frame 8.png",
      title: "High Liquidity",
      text: "You can use Us to purchase, sell, gift, and store anything online at any time.",
    },
  ];

  return (
    <>
      <div className="w-[85%] m-auto mt-10 mb-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-2xl mb-1.5">Why Us</h1>
          <div className="w-[50px] h-[2px] bg-gold-500"></div>
        </div>
        <div className="grid grid-cols-3 gap-2  mt-10">
          {CardsData.map((Card) => (
            <Cards icon={Card.icon} title={Card.title} text={Card.text} />
          ))}
        </div>
      </div>
    </>
  );
}

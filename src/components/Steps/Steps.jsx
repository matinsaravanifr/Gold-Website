import React from "react";
import StepsCard from "../StepsCard/StepsCard";

export default function Steps() {
    const Steps=[
        {
            icon:'src/assets/StepsNumber/step-1.png',
            title:'Request your to sell',
            text:'There is no-obligation so give us a try'
        },
        {
            icon:'src/assets/StepsNumber/step-2.png',
            title:'Package and ship your items',
            text:'We supply free and insured shipping via FedEx**'
        },
        {
            icon:'src/assets/StepsNumber/step-3.png',
            title:'Accept offer and get paid',
            text:'We have the highest payouts and there is NO Obligation'
        },
        {
            icon:'src/assets/StepsNumber/step-4.png',
            title:'Track your items',
            text:'Track the location of your product with ease'
        },

    ]
  return (
    <div className="w-full bg-Cards-bg mt-10 ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-white mt-10">How It Works</h1>
        <p className="text-white text-center opacity-[50%] w-[65%] mt-5">
          In only 4 steps, you can swiftly and worry-free sell your gold online.
          You can follow the status of your gold from the comfort of your home
          by tracking the status and location of your gold
        </p>

      </div>
        <div className="w-[85%] m-auto mt-10 flex justify-between pb-5">
            {Steps.map((step)=>(
                <StepsCard icon={step.icon} title={step.title} text={step.text}/>
            ))}
        </div>
    </div>
  );
}

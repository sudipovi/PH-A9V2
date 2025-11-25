import React from "react";

const tips = [
  {
    tipId: 1,
    title: "Keep Them Warm Indoors",
    description:
      "Provide a cozy, insulated sleeping area for your pet during cold nights. Avoid placing beds near doors or drafty windows. A warm blanket or heated pad can make winter much more comfortable.",
  },
  {
    tipId: 2,
    title: "Protect Their Paws",
    description:
      "Cold sidewalks and icy surfaces can damage your pet’s paws. Use paw balm or protective booties during walks. Check paws after returning home for cracks or irritation.",
  },
  {
    tipId: 3,
    title: "Adjust Their Winter Diet",
    description:
      "Pets often burn more energy staying warm during winter. Consult a vet to slightly increase their calorie intake if needed. Ensure they have access to fresh, unfrozen water at all times.",
  },
  {
    tipId: 4,
    title: "Limit Outdoor Time",
    description:
      "Low temperatures can be harmful even to thick-furred pets. Plan shorter, more frequent walks instead of long outings. Keep an eye out for shivering or signs of discomfort.",
  },
  {
    tipId: 5,
    title: "Maintain Regular Grooming",
    description:
      "Matted fur loses its insulating ability during winter. Brush your pet regularly to help maintain warmth. Use mild, winter-safe products to keep their skin moisturized.",
  },
];

const WinterCareTips = () => {
  return (
    <div>
      <div className="mt-8">
        <div>
          <h3 className="font-bold text-3xl text-center m-10 text-purple-700">
            Winter Care Tips
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {tips.map((tip) => (
            <div className="card card-border border-5 border-black w-96">
              <div className="card-body">
                <h2 className="card-title">{tip.title}</h2>
                <p>{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;

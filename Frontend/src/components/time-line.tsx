import React from "react";

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea culpa sequi minus commodi aut modi, repellat, incidunt quibusdam est quaerat impedit cumque nihil! Voluptatem, minima quo qui esse modi explicabo!",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea culpa sequi minus commodi aut modi, repellat, incidunt quibusdam est quaerat impedit cumque nihil! Voluptatem, minima quo qui esse modi explicabo!",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea culpa sequi minus commodi aut modi, repellat, incidunt quibusdam est quaerat impedit cumque nihil! Voluptatem, minima quo qui esse modi explicabo!",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea culpa sequi minus commodi aut modi, repellat, incidunt quibusdam est quaerat impedit cumque nihil! Voluptatem, minima quo qui esse modi explicabo!",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea culpa sequi minus commodi aut modi, repellat, incidunt quibusdam est quaerat impedit cumque nihil! Voluptatem, minima quo qui esse modi explicabo!",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <div className="relative">
      <div className="absolute top-3 left-0 h-0.5 bg-gray-300/50 w-[100%] z-0"></div>

      <div className="flex  overflow-x-auto justify-center">
        <ul className="flex space-x-20">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <button
                onClick={() => {
                  console.log(index);
                  setActiveIndex(index);
                }}
                className={`w-6 h-6 rounded-full z-10 ${
                  activeIndex === index ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></button>
              <p className="mt-2 text-gray-500">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      {activeIndex !== null && (
        <div className="top-20 left-0 w-screen px-4 md:px-0">
          <div className="bg-card pt-10 text-lg mx-20">
            <h1 className="py-1 font-bold">{items[activeIndex].cardTitle} </h1>
            <h2 className=" font-light text-sm py-1">
              {items[activeIndex].cardSubtitle}
            </h2>
            <p>{items[activeIndex].cardDetailedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;

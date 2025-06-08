import React, { useState } from "react";
const categories = [
  "Trending",
  "Recommended",
  "Music",
  "Gaming",
  "News",
  "Sports",
];

const CategoriesBar = ({ onSelect }) => {
  const [active, setActive] = useState("Trending");

  const handleClick = (cat) => {
    setActive(cat);
    if (onSelect) onSelect(cat);
  };

  return (
    <div className="flex space-x-4 overflow-x-auto bg-white border-b border-gray-200 shadow-sm px-4 py-2 sticky top-[56px] z-20">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150
            ${
              active === cat
                ? "bg-red-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;

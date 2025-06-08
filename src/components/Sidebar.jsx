import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const categories = [
  "Trending",
  "Recommended",
  "Music",
  "Gaming",
  "News",
  "Sports",
];

const Sidebar = ({ isOpen, onClose, onSelectCategory }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button onClick={onClose} aria-label="Close menu">
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                onClose();
              }}
              className="text-left px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-800"
            >
              {cat}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

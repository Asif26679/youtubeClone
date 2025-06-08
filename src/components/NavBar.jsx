import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon,PlayCircleIcon} from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";


const NavBar = ({ onHamburgerClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="w-full px-4 py-3 flex items-center justify-between bg-white shadow-md sticky top-0 z-10">

<div className="flex items-center space-x-2">
        {/* Hamburger visible only on mobile */}
        <button
          onClick={onHamburgerClick}
          className="md:hidden p-2 rounded hover:bg-gray-200"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
      <div
        className="text-red-600 text-2xl font-bold cursor-pointer flex items-center"
        onClick={() => navigate("/")}
      >
        <PlayCircleIcon className="h-6 w-6 text-red-600" />
         <span className="text-red-600 text-2xl font-bold hidden md:inline">YouTube</span>
      </div>
      </div>
      <div className="flex items-center w-full max-w-xl mx-4 space-x-2">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-md mx-4"
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-full"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </form>
      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <MicrophoneIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
      <button className="relative">
          <BellIcon className="h-6 w-6 text-gray-600 hover:text-red-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </button>
      <button
        onClick={() => alert("Redirect to Sign In")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm cursor-pointer hidden md:inline"
        >
        Sign In
      </button>
      <button onClick={()=> alert("Sign In")}
            className="md:hidden">
                <UserIcon className="h-6 w-6 text-blue-600"></UserIcon>
            </button>
          </div>
    </nav>
  );
};

export default NavBar;

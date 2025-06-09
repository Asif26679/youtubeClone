// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MagnifyingGlassIcon,PlayCircleIcon} from "@heroicons/react/24/solid";
// import { BellIcon } from "@heroicons/react/24/outline";
// import { MicrophoneIcon } from "@heroicons/react/24/outline";
// import { UserIcon } from "@heroicons/react/24/outline";
// import { Bars3Icon } from "@heroicons/react/24/outline";


// const NavBar = ({ onHamburgerClick }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${searchTerm}`);
//       setSearchTerm("");
//       setMobileSearchOpen(false);
//     }
//   };

//   return (
//     <nav className="w-full px-4 py-3 flex items-center justify-between bg-white shadow-md sticky top-0 z-10">

// <div className="flex items-center space-x-2">
//         {/* Hamburger visible only on mobile */}
//         <button
//           onClick={onHamburgerClick}
//           className="md:hidden p-2 rounded hover:bg-gray-200"
//           aria-label="Open menu"
//         >
//           <Bars3Icon className="h-6 w-6 text-gray-700" />
//         </button>
//       <div
//         className="text-red-600 text-2xl font-bold cursor-pointer flex items-center"
//         onClick={() => navigate("/")}
//       >
//         <PlayCircleIcon className="h-6 w-6 text-red-600" />
//          <span className="text-red-600 text-2xl font-bold hidden md:inline">YouTube</span>
//       </div>
//       </div>
//       {/* <div className="flex items-center w-full max-w-xl mx-4 space-x-2">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center w-full max-w-md mx-4"
//       >
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500 hidden md:block"
//         /> */}
//          <div className={`flex items-center flex-grow mx-4 max-w-xl ${mobileSearchOpen ? "w-full" : "max-w-md"}`}>
//         {mobileSearchOpen ? (
//           <form onSubmit={handleSubmit} className="flex w-full items-center">
//             <input
//               type="text"
//               autoFocus
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500 text-black"
//             />
//         <button
//           type="submit"
//           className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-full"
//         >
//           <MagnifyingGlassIcon className="h-5 w-5" />
//         </button>
//       </form>
//       <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
//           <MicrophoneIcon className="h-6 w-6 text-gray-700" />
//         </button>
//       </div>
      
//       <div className="flex items-center space-x-4">
//       <button className="relative">
//           <BellIcon className="h-6 w-6 text-gray-600 hover:text-red-600" />
//           <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
//         </button>
//       <button
//         onClick={() => alert("Redirect to Sign In")}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm cursor-pointer hidden md:inline"
//         >
//         Sign In
//       </button>
//       <button onClick={()=> alert("Sign In")}
//             className="md:hidden">
//                 <UserIcon className="h-6 w-6 text-blue-600"></UserIcon>
//             </button>
//           </div>
//     </nav>
//   );
// };

// export default NavBar;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { BellIcon, MicrophoneIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = ({ onHamburgerClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
      setMobileSearchOpen(false); // close search on submit (optional)
    }
  };

  return (
    <nav className="w-full px-4 py-3 bg-white shadow-md sticky top-0 z-10 flex items-center justify-between">
      {/* Left side (hamburger + logo) */}
      {!mobileSearchOpen && (
        <div className="flex items-center space-x-2">
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
            <span className="hidden md:inline">YouTube</span>
          </div>
        </div>
      )}

      {/* Center: Search form */}
      <div className={`flex items-center flex-grow mx-4 max-w-xl ${mobileSearchOpen ? "w-full" : "max-w-md"}`}>
        {mobileSearchOpen ? (
          <form onSubmit={handleSubmit} className="flex w-full items-center">
            <input
              type="text"
              autoFocus
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500 text-black"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-full"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileSearchOpen(false)}
              className="ml-2 px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
              aria-label="Close search"
            >
              ✕
            </button>
          </form>
        ) : (
          // Desktop & mobile (hidden on mobile)
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex items-center w-full"
          >
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-red-500 text-black"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-full"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>

      {/* Right side: Mic, bell, signin, and mobile search button */}
      {!mobileSearchOpen ? (
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <MicrophoneIcon className="h-6 w-6 text-gray-700" />
          </button>
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
          <button
            onClick={() => alert("Sign In")}
            className="md:hidden"
          >
            <UserIcon className="h-6 w-6 text-blue-600" />
          </button>
          {/* Mobile search icon button */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-200"
            aria-label="Open Search"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;

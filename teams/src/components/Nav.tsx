import { Link } from "react-router-dom";
import School from "../assets/ion-emission.png";

const Navbar = () => {
  const navPage = [
    { id: 0, listStyle: "text-white hover:text-blue-600", list: "Dashboard", to: "/" },
    { id: 1, listStyle: "text-white hover:text-blue-600", list: "Grade Report", to: "/Grade" },
    { id: 2, listStyle: "text-white hover:text-blue-600", list: "Missing Report", to: "/Missing" },
    { id: 3, listStyle: "text-white hover:text-blue-600", list: "Contact", to: "/Contact_us" },
    { id: 4, listStyle: "text-white hover:text-blue-600", list: "Help", to: "/Help" },
  ];

  return (
    <div className="inline-flex items-center border-0 w-[100%] py-4 bg-cyan-500">
      <div className="flex mx-auto items-left w-[40%]">
        <img className="w-[8%] ml-[100px] cursor-pointer" src={School} alt="logo" />
        <h1 className="flex "></h1>
      </div>
      <div className="w-[60%] flex justify-end list-none gap-10 m-[4] cursor-pointer mr[10px]">
       
        {navPage.map((NavPages) => (
          <Link key={NavPages.id} to={NavPages.to}>
            <li className={NavPages.listStyle}>{NavPages.list}</li>
          </Link>
        ))}
        <button type="button" className="px-3 py-2 text-sm font-medium text-center text-black bg-blue-500 rounded-lg hover:bg-blue-60b0 focus:ring-4 focus:outline-none 
      focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[80px]">
          <Link to="/Login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

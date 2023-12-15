
import { Link } from "react-router-dom";
import School from "../assets/ion-emission.png";
const Navbar = () => {
  return (

    
    <div className="inline-flex items-center border-0  w-[100%] py-4 bg-cyan-500 ">

      <div className=" flex mx-auto items-left  w-[40%]">
        <img className="w-[8%] ml-[100px]" src={School} alt="logo" /><h1 className="flex  "></h1>
      </div>

      <div className="w-[60%] flex justify-end list-none gap-10 m-[4]  cursor-pointer mr[10px]">

        <Link to={"/"}><li className="text-white hover:text-blue-600">Dashboard</li></Link>
        <Link to={"/Grade"}><li className="text-white hover:text-blue-600">Grade Report</li></Link>
        <li className="text-white hover:text-blue-600">Missing Report</li>
        <li className="text-white hover:text-blue-600">Contact</li>
        <li className="text-white hover:text-blue-600">Help</li>
        <button type="button" className="px-3 py-2 text-sm font-medium text-center text-black bg-blue-500 rounded-lg hover:bg-blue-60b0 focus:ring-4 focus:outline-none 
      focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-[80px]"><Link to="/Login">Login</Link></button>
      </div>




    </div>



  )
};



export default Navbar;



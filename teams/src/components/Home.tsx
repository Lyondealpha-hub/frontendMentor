import Navbar from "./Nav";
import Student from "../components/student3.jpg";
import image from "../assets/images.jpg";
import Dashboard from "../assets/database-storage (1).png";
import report from "../assets/report.png";
import support from "../assets/support.png";


const Home = () => {
    return ( 
  
     
      <>
      <Navbar />
        <div className="w-[100%] h-[50%] bg-myimage flex"></div>
        <div className="w-[100%]   flex mt-[5px]">
            <div className="align-center mt-10 w-[60%] m-12">

                <h1 className="text-[50px] text-blue-700 ">How To Find Missing Grades Reports</h1>
                <h1 className="text-[20px]">Dealing with incomplete grades during the storage process can be a time-consuming and frustrating task. 
                It often involves reviewing each report card, contacting specific teachers, updating grades,
                and then repeating the entire process of storing grades and generating report cards.
                Imagine a more efficient solution - a method to ensure all grades are complete before the storage process begins. Introducing 
                our Missing Grades Report, a feature that streamlines this workflow. This report identifies students without final term grades, 
                allowing administrative staff to promptly notify teachers of the specific missing grades. By utilizing this tool, you can save valuable
                time and streamline the grading and reporting process.</h1>
            </div>

            <div className="w-[40%]">
                <img className="w-[70%] border-solid mt-[70px]" src={image} alt="logo"/>
            </div>
                
        </div>
        <div className="flex w-[100%] mt-2">
            <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden hover:transition ease-in-out delay-150 cursor-pointer">
                <img className="h-20 w-[90px] m-auto mt-10" src={Dashboard}/>
             
                <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Database Support </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-sky-400 text-[16px]">Read More</a>

            </div>
            <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden cursor-pointer">
                <img className="h-20 w-[90px] m-auto" src={report}/>
             
                <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Report Grade </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-sky-400 text-[16px]">Read More</a>

            </div>
            <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden cursor-pointer">
                <img className="h-20 w-[90px] m-auto" src={support}/>
             
                <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Support </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-sky-400 text-[16px]">Read More</a>

            </div>
        </div>
        </>
    )
};
  export default Home;
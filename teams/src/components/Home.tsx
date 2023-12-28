import Navbar from "./Nav";
import Student from "../components/student3.jpg";
import image from "../assets/images.jpg";
import Dashboard from "../assets/database-storage (1).png";
import report from "../assets/report.png";
import support from "../assets/support.png";


const Home = () => {
 const homePage=[
    {id:0, homeIndex:"0", h2Style:"text-center px-2 pb-5 font-bold text-[20px]" , h2:"Database Support", aStyle:"bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]", a:"Read More"},
    // {id:1, homeIndex:"1",h2Style:"text-center px-2 pb-5 font-bold text-[20px]" , h2:"Report Grade", aStyle:"bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]", a:"Read More"},
    // {id:2, homeIndex:"2",h2Style:"text-center px-2 pb-5 font-bold text-[20px]" , h2:"Support", aStyle:"bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]", a:"Read More"}



]




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
             
                

            </div>


         {homePage.map((homePages)=>(

          <div>

             <h2 className={homePages.h2Style}>{homePages.h2} </h2>
                <a href="#" className={homePages.aStyle}>{homePages.a}</a>


          </div>
          
        )
        )}
        </div>


        
        {/* <div className="flex w-[100%] mt-2">
            {/* <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden hover:transition ease-in-out delay-150 cursor-pointer">
                <img className="h-20 w-[90px] m-auto mt-10" src={Dashboard}/>
             
                {/* <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Database Support </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]">Read More</a> 

            </div> 
            <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden cursor-pointer">
                <img className="h-20 w-[90px] m-auto" src={report}/>
             
                <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Report Grade </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]">Read More</a>

            </div>
            <div className="flex flex-col bg-white rounded-lg shadow -md w-full m-6 overflow-hidden cursor-pointer">
                <img className="h-20 w-[90px] m-auto" src={support}/>
             
                <h2 className="text-center px-2 pb-5 font-bold text-[20px]"> Support </h2>
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:text-black text-[16px]">Read More</a>

            </div>
        </div> */}

        <footer className="bg-sky-400">
    <div className="mx-auto max-w-7xl py-8 px-2 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
        <ul className="flex items-center flex-wrap mb-3 md:mb-0">
              <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Dashboard</a>
              </li>
              <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Missing Grade</a></li>
              <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Grade Report</a></li>
              <li><a href="/Contact_us" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Contact</a></li>
              <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline">Help</a></li>
        </ul>
      </nav>
        <div className=" md:mb-2.5 flex justify-center space-x-6 md:order-3  ">
            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd" />
                </svg>
            </a>

            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            </a>

            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </div>
        <div className="mt-8  md:order-1 md:mt-0 ">
            <p className="text-center text-base text-white">
                &copy; All right reserved.
            </p>
        </div>
    </div>
</footer>
        </>
    )
};
  export default Home;
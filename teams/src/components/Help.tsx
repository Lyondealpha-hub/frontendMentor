import Navbar from "./Nav";
import image from "../assets/images.jpg";
import Dashboard from "../assets/database-storage (1).png";
import report from "../assets/report.png";
import support from "../assets/support.png";
import { Disclosure } from "@headlessui/react";



export const Help = () => (
  <>

    <Navbar />

    <main>



      <div className="w-[100%] h-[100%] bg-slate-600 grid justify-items-center">

        <div className="w-[100%]  grid justify-items-center ">
          <div className=" w-[50%]  bg-yellow-300  h-[520px] mt-10 mb-10">
            <h2 className="text-center  font-bold pt-10 text-[27px]">Frequently Asked Questions</h2>
            <h3 className="text-center text-[18px] ">choose a categories to browser related Questions</h3>


              <div className="mx-auto w-full max-w-md rounded-xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <span>What is your refund policy?</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>

                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason, email us
                        within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
 
              </div>






          </div>

        </div>



        <div className="w-[50%] bg-slate-400">



        </div>
      </div>


    </main>
  </>
)

export default Help;


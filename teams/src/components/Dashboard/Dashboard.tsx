import React from 'react'

export const Dashboard = () => {

  return (
    <main className="h-full  flex items-center justify-center mx-7">
        <div className="main-content flex flex-row justify-between">
          {/* text section */}
          <section className=" w-1/2 flex flex-col justify-center">
            <h2 style={{fontSize:50}} className=' font-semibold'>Hello!</h2>
            <p className=' mt-2  text-lg text-gray-500'>Open a module on the main navigator to get started</p>
          </section>

          {/* image */}
          <section className=" w-1/2 md:h-7/12 lg:h-9/12 xl:h-full">
            <div className="img-div">
              {/* <img src={welcome} alt="Welcome" /> */}
            </div>
          </section>
        </div>
      </main>
  )
};


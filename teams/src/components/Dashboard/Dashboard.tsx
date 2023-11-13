import React, { useState } from 'react'
import task from '../../assets/task.png'
import progress from '../../assets/progress.png'
import pending from '../../assets/pending.png'
import complete from '../../assets/complete.png'
import eye from '../../assets/eye.png'
import { Card, Form } from 'antd';
import { DatagridTemplate } from '../../templates/datagridTemplate'
import { NewButton } from '../accesserios/buttons'
import { allDevs } from './data/datagrid_cols'
import { SideDrawer } from '../sideDrawer/SideDrawer'
import { CardsTemplate } from '../../templates/cardsTemplate'
import Modalx from '../../templates/Modal2'

export const Dashboard = () => {

  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const summary = [
    { id: 0, label: "", title: "Total Task", image: task, desc: 24 },
    { id: 1, label: "", title: "In-Progress", image: progress, desc: 30 },
    { id: 2, label: "", title: "Pending", image: pending, desc: 30 },
    { id: 3, label: "", title: "Completed", image: complete, desc: 30 },
  ]
  const assings = [
    { id: 0, label: "Module Name", title: "Total Task", desc: 24 },
    { id: 1, label: "Devs", title: "In-Progress",  desc: 30 },
  
  ]

  const teams = [
    { id: 0, label: "", title: "Front-End Teams ", image: "", desc: "" },
    { id: 1, label: "", title: "Back-End Teams", image: "", desc: "" },
  ]

  return (
    <main className="w-full h-full justify-center ">
      <div className="w-full h-full">
        {/* Top */}
        <div className='w-full h-2/5 '>
          <div className='flex  justify-evenly p-1 space-x-1'>
            {summary.map(({ id, label, title, image, desc }) => {
              return (
                <>
                  <CardsTemplate
                    className='w-full h-[200px] shadow-lg rounded  border-4'
                    title={title}
                    content={
                      <div className='w-full '>
                        {/* image and title */}
                        <div className='w-full space-y-2'>
                          <img src={image} alt='images' />
                          <p className='font-semibold text-lg'>{title}</p>

                        </div>
                        {/* details */}
                        <div className='w-full py-9 '>
                          <p className=' font-bold text-2xl'>{desc}</p>
                        </div>

                      </div>
                    } />


                </>
              )
            })}
          </div>

          <div className='w-full flex justify-between items-center'>

            <div className='w-1/2 flex  justify-center items-center space-x-3 px-2 '>
              {teams.map(({id,title,label,desc,image }) => {
                return (
                  <>
                    <CardsTemplate
                      className='w-full h-[80px] shadow-lg rounded  border-2'
                      title={title}
                      content={
                        <div className='w-full '>
                          {/* image and title */}
                          <div className='w-full flex space-x-2'>
                            <img src={image} alt='images' />
                            <p className='font-semibold text-lg'>{title}</p>

                          </div>
                          

                        </div>
                      } />
                  </>
                )
              })}
            </div>

            <div className='w-1/2 flex justify-end py-10 px-5 space-x-3'>
              <button onClick={() => { setIsSideOpen(true) }} className=' py-1.5 px-5 border-2 rounded space-x-1' name={"View"} >
                <span className='flex space-x-1 justify-center items-center'>
                  <img src={eye} alt="" />
                  <p>{"View"}</p>
                </span>
              </button>
              <NewButton btnName={'New Assignment Task'} handleNew={() => { setIsModalOpen(true)}} />

            </div>

          </div>


        </div>
        {/* Bottom */}

        <div className='w-full h-3/5'>
          <DatagridTemplate columns={allDevs} />
        </div>

      </div>

      <>
        <SideDrawer handleClose={(e: any) => { setIsSideOpen(false) }} handleOpen={isSideOpen} />
      </>

      <Form labelCol={{span: 9}}>
      <Modalx  isMultiple={true} isList={false} isModalOpen={isModalOpen} handleCancel={() => { setIsModalOpen(false) } } multipleInputs={assings}  />
      </Form>

    </main>
  )
};


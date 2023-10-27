import React from 'react'
import { CheckIn } from './widgets/CheckIn'
import { CheckOut } from './widgets/CheckOut'

export const Attendance = () => {
    return (
        <div className='w-full h-full'>
            <div className='page_body w-full h-full'>
                {/* form */}
                <div className='w-full flex justify-between p-2 space-x-2'>
                    <div className='left_form w-1/2 border-[1px] '>
                        <CheckIn />
                    </div>

                    <div className='right_form w-1/2 border-[1px]'>
                        <CheckOut />
                    </div>

                </div>

                {/* Grid */}
                <div className=''>

                </div>
            </div>

        </div>
    )
}

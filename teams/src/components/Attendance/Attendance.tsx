import React, { useCallback, useRef, useState } from 'react'
import { CheckIn } from './widgets/CheckIn'
import { CheckOut } from './widgets/CheckOut'
import { DatagridTemplate } from '../../templates/datagridTemplate'
import { attendance_cols } from './data/datagrid_cols'

type credentials = {
    active : boolean
    name : string
}


export const Attendance = () => {

    const [states, setStates] = useState<credentials >({
        active : false,
        name : "",
    });

    const updateState = (key:string, value:any)=>{
        setStates((prev)=>({...prev, [key]:value}))
    }

    return (
        <div className='w-full h-full'>
            <div className=' w-full h-full'>
                {/* form */}
                <div className='w-full flex justify-between p-2 space-x-2'>
                    <div className='w-1/2 border-[1px] '>
                        <CheckIn statesx={states} updateStatex={updateState} />
                    </div>

                    <div className=' w-1/2  border-[1px]'>
                        <CheckOut statesx={states} updateStatex={updateState} />
                    </div>

                </div>

                {/* Grid */}
                <div className='w-full h-1/2'>
                    <DatagridTemplate columns={attendance_cols} />
                </div>
            </div>

        </div>
    )
}

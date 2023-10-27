import React from 'react'
import { Page } from './types'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { Attendance } from '../../components/Attendance/Attendance'



export const pages : Page[] = [
    { path:"/dashboard", exact:true, component: Dashboard, selected:'Dashboard' },
    { path:"/teams", exact:true, component: Dashboard, selected:'Teams' },
    { path:"/developers", exact:true, component: Dashboard, selected:'Developers' },
    { path:"/management/attendance", exact:true, component: Attendance, selected:'Attendance' },
    { path:"/developers", exact:true, component: Dashboard, selected:'Developers' },
]
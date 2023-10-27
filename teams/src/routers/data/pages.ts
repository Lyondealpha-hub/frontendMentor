import React from 'react'
import { Page } from './types'
import Dashboard from '../../components/Dashboard/Dashboard'




export  const pages: Page[] = [
    { path:"/Dashboard", exact:true, component:Dashboard, selected:'Dashboard' },
]
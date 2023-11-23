import { Card } from 'antd'
import React from 'react'

interface props {
    isbordered ?: boolean
    isdividered ?: boolean
    pageHeader : React.ReactNode | string
    headStyle ?: any
    className ?: string
    divideredClassName ?: string
    leftwidth ?: string
    rightwidth ?: string
    leftInnerChild ?: React.ReactNode
    rightInnerChild ?: React.ReactNode
}

const FormsTemplate = ({isbordered, isdividered, pageHeader, headStyle, className, divideredClassName,leftwidth='1/2',rightwidth = '1/2', leftInnerChild, rightInnerChild} : props) => {
  return (
    <main className='w-full h-full'>
        <Card bordered={isbordered} title={pageHeader} headStyle={...headStyle} size='small' className={className}  >



            {isdividered && (
                <section className={`w-full h-full justify-between`}>
                    {/* leftside */}
                    <aside className={`w-${leftwidth}`}>
                        {leftInnerChild}
                    </aside>

                    {/* rightside */}
                    <aside className={`w-${rightwidth}`} >
                        {rightInnerChild}
                    </aside>

                </section>
            )}




            
        </Card>
    </main>
  )
}

export default FormsTemplate
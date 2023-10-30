import { Card } from 'antd'
import React from 'react'

interface props {
    title ?: string;
    isbordered ?: boolean;
    isTitle ?: boolean;
    className ?: string;
    content : any
}

export const CardsTemplate = ({title, isbordered = false, isTitle, className, content}:props) => {
  return (
    <div className='w-full h-full'>
        <Card id={title} bordered={isbordered} title={isTitle && title} className={className}>
            {content}
        </Card>
    </div>
  )
}

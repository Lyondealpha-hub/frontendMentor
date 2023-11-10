import React from 'react';
import { Card } from 'antd';

interface CardProps{
title: string;
content:string;
}


export const CardTemplates = ({title,content}:CardProps) => (
  <Card >
  <div className="overflow-hidden w-full text-lg">
    <p>{title}</p>
    <p>{content}</p>
    </div>
  </Card>
);


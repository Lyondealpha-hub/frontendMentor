import React from 'react';
// import { Card } from 'antd';
// import user from '../assets/user.png'
// import search from '../assets/search.png'
// import filter from'../assets/filter.png'
// import todo from '../assets/todo.png'

interface CardProps{
title: string;
content:string;
}
// const icons = [
//   { id: 0,title:"Tasks" ,image: todo  },
//   { id: 1,title:"Search", image: search },
//   { id: 1, title:"Person", image: user },
//   { id: 1, title:"Filter", image: filter },

// ];

export const CardTemplates = ({title,content}:CardProps) => (
  <><div className=" w-full">
    <h1 className='text-4xl uppercase'>{title}</h1>
    <p>{content}</p>
    </div>
</>
);


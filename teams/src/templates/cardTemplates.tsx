// // import React from 'react'
// interface CardProps {
//   title: string;
//   content: string;
// }

export const CardTemplates = ({ title, content }: any) => {
  return (
    <>
      <div>
        <div className="max-w-xs m-3 rounded overflow-hidden shadow-lg bg-white py-12 ">
          <div className="">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content} </p>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white py-12 ">
          <div className="">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content} </p>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState } from "react";
import time from '../assets/time.png';
export const Timer = () => {
    const [starttime , setStarttime] = useState<string>('Display Time');
    const [endtime , setEndtime] = useState<string>('Display Time');
    const [timeSpent , setTimespent] = useState<string>('Display ')
  return (
    <div className="shadow-lg border p-8 px-10 rounded-lg w-[90%] h-[90%]">
      {/* <label className=" text-lg ">{dayOfWeek}</label>
      <input className="font-bold text-xl " type="date"></input> */}
      <div className="flex gap-40 justify-center ">
        <div>
          <label className="font-bold text-lg">Start Time</label>
          <div className="border rounded-lg shadow-lg text-center p-2 py-2 ">{starttime}</div>
        </div>
        <div>
          <label className="font-bold text-lg">End Time</label>
          <div className="border rounded-lg shadow-lg text-center p-2 py-2">{endtime}</div>
        </div>
        <div>
          <label className="font-bold text-lg">Time Spent</label>
          <div className="border rounded-lg shadow-lg text-center p-2 py-2">{timeSpent}</div>
        </div>
      </div>
    </div>
  );
};

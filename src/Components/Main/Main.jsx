import React, { use, useEffect, useState } from "react";
import Bid from "./Bid";

const Main = () => {
    const [bids,setBids]=useState([]);
    useEffect(()=>{
        fetch('Bids.json')
        .then(res=>res.json())
        .then(data=>setBids(data));



    },[])
  return (
    <div className="py-20 px-20 space-y-3">
      <h1 className="font-semibold text-2xl text-[#2a4268]">Active Auctions</h1>
      <h4 className="text-sm">Discover and bid on extraordinary items</h4>
      <div className="flex gap-5 text-center">
        <div className="w-[70%] bg-white rounded-lg p-5 ">
          <div className="flex border-b border-gray-200 pb-5">
            <div className="w-[40%] font-semibold">Items</div>
            <div className="w-[20%] font-semibold">Current Bid</div>
            <div className="w-[20%] font-semibold">Time Left</div>
            <div className="w-[20%] font-semibold">Bid Now</div>
          </div>
          {bids.map((bid) => (
            <Bid key={bid.id} bid={bid}></Bid>
          ))}
        </div>
        <div className="w-[30%] bg-white rounded-lg p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            sequi, numquam unde distinctio ab quibusdam, nihil, iste consequatur
            quas iure aspernatur impedit. Praesentium beatae delectus inventore
            deleniti pariatur dolores eligendi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

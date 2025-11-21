import React, { use, useEffect, useState } from "react";
import Bid from "./Bid";
import BidCart from "./BidCart";

const Main = () => {
    const [bids,setBids]=useState([]);
    useEffect(()=>{
        fetch('Bids.json')
        .then(res=>res.json())
        .then(data=>setBids(data));
    },[])
    const [bid,setBid]=useState([]);
    const handleBid=(newBid)=>{
        setBid([...bid,newBid])
        
    }

    const [totalBidAmount,setTotalBidAmount]=useState(0);
    const handleTotalBidAmount=(amount)=>{
        setTotalBidAmount((parseFloat(amount)+totalBidAmount));
    }

    const removeBid=(bidCart)=>{
        const heyBids=bid.filter(item=> item.id!==bidCart.id);
        setBid(heyBids);
       setTotalBidAmount(totalBidAmount - parseFloat(bidCart.currentBidPrice));
    }
  return (
    <div className="py-20 px-20 space-y-3">
      <h1 className="font-semibold text-2xl text-[#2a4268]">Active Auctions</h1>
      <h4 className="text-sm font-semibold text-gray-600">
        Discover and bid on extraordinary items
      </h4>
      <div className="flex gap-5 text-center">
        <div className="w-[70%] bg-white rounded-lg p-5 ">
          <div className="flex border-b border-gray-200 pb-5">
            <div className="w-[40%] font-semibold">Items</div>
            <div className="w-[20%] font-semibold">Current Bid</div>
            <div className="w-[20%] font-semibold">Time Left</div>
            <div className="w-[20%] font-semibold">Bid Now</div>
          </div>
          {bids.map((bid) => (
            <Bid
              key={bid.id}
              bid={bid}
              handleBid={handleBid}
              handleTotalBidAmount={handleTotalBidAmount}
            ></Bid>
          ))}
        </div>
        <div className="w-[30%] bg-white rounded-lg p-5 ">
          <div className="flex justify-center items-center space-x-2  border-b border-gray-200 pb-5">
            <img
              className="h-5 w-5"
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-icon-3/like-284.png"
              alt=""
            />
            <h1 className="font-semibold text-xl text-[#2a4268]">
              Favorite Items
            </h1>
          </div>
          <div>
            {bid.length === 0 && (
              <div className="px-10 space-y-4 my-7">
                <h1 className="font-semibold text-2xl">No favorites yet</h1>
                <p className="text-gray-500">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            )}
            {bid.map((item) => (
              <BidCart
                key={item.id}
                bidCart={item}
                removeBid={removeBid}
              ></BidCart>
            ))}
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl">Total bids Amount</h2>
            </div>
            <div>
              <h2 className="text-xl">${totalBidAmount}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

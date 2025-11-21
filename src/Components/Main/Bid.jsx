import React from "react";

const Bid = ({ bid, handleBid }) => {
  const { title, image, currentBidPrice: price, timeLeft: time } = bid;
  return (
    <div className="flex border-b border-gray-200 pb-5 pt-2 justify-center items-center text-center">
      <div className="w-[40%] font-semibold">
        <div className="flex space-x-2">
          <img
            className="w-10 h-10 object-cover cursor-pointer "
            src={image}
            alt=""
          />
          <h3>{title}</h3>
        </div>
      </div>
      <div className="w-[20%] font-semibold">${price}</div>
      <div className="w-[20%] font-semibold">{time}</div>
      <div className="w-[20%] font-semibold">
        <img
          onClick={()=>{handleBid(bid);}}
          className="h-5 w-5 mx-auto cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/simple-icon-3/like-284.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Bid;

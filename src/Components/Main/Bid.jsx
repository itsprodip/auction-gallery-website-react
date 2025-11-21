import React from "react";

const Bid = ({ bid }) => {
  const { title, image, currentBidPrice: price, timeLeft: time } = bid;
  return (
    <div className="flex border-b border-gray-200 pb-5 pt-2">
      <div className="w-[40%] font-semibold">
        <div className="flex space-x-2">
            <img className="w-10 h-10 object-cover" src={image} alt="" />
            <h3>{title}</h3>
        </div>
      </div>
      <div className="w-[20%] font-semibold">{price}</div>
      <div className="w-[20%] font-semibold">{time}</div>
      <div className="w-[20%] font-semibold">Bid Now</div>
    </div>
  );
};

export default Bid;

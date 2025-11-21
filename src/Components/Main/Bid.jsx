import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
const Bid = ({ bid, handleBid, handleTotalBidAmount }) => {
  const { title, image, currentBidPrice: price, timeLeft: time } = bid;
  const [bidClicked, setBidClicked] = useState(false);
  const handleBidClicked = () => {
    setBidClicked(true);
   
  };

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
        <button disabled={bidClicked}>
          <img
            onClick={() => {
              handleBid(bid);
              handleTotalBidAmount(price);
              handleBidClicked();
            }}
            className="h-5 w-5 mx-auto cursor-pointer"
            src={
              !bidClicked
                ? "https://icons.veryicon.com/png/o/miscellaneous/simple-icon-3/like-284.png"
                : "https://icons.veryicon.com/png/o/internet--web/flatten-icon/like-19.png"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Bid;

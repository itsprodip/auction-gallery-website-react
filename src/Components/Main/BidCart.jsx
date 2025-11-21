import React from 'react';
import { MdCancelPresentation } from "react-icons/md";
const BidCart = ({ bidCart }) => {
  const { image, title, currentBidPrice: price, bidsCount } = bidCart;
  console.log(image, title, price, bidsCount);
  return (
    <div>
      <div className="flex gap-2 items-center border-b border-gray-200 pt-3 pb-2 text-[#0e2954]">
        <div className="w-[20%]">
          <img className="w-15 h-15 object-cover" src={image} alt="" />
        </div>
        <div className="w-[70%] ml-5">
          <div className="text-left font-semibold">{title}</div>
          <div className="flex gap-3">
            <div className="w-20 text-left">${price}</div>
            <div className="w-20 text-center">Bids: {bidsCount}</div>
          </div>
        </div>
        <div className="w-[10%]">
          <button className="cursor-pointer">
            <MdCancelPresentation />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidCart;
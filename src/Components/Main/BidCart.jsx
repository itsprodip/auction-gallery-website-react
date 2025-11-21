import React from 'react';
import { MdCancelPresentation } from "react-icons/md";
const BidCart = ({ bidCart }) => {
  const { image, title, currentBidPrice: price, bidsCount } = bidCart;
  console.log(image, title, price, bidsCount);
  return (
    <div>
      <div className="flex gap-2 items-center border-b border-gray-200 pt-3">
        <div className="w-[20%]">
          <img className="w-15 h-15 object-cover" src={image} alt="" />
        </div>
        <div className="w-[70%] ml-5">
          <div className='text-left'>{title}</div>
          <div className='flex gap-4'>
            <div>${price}</div>
            <div>Bids: {bidsCount}</div>
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
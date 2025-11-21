import React from 'react';
import banner from "/assets/Banner-min.jpg"
const Banner = () => {
    return (
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-[40%] text-white py-30 pl-20 space-y-5">
          <h1 className='text-4xl font-bold'>Bid on Unique Items from Around the World</h1>
          <p className='text-xl text-gray-300'>
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className='btn rounded-full px-10'>Explore Auctions</button>
        </div>
        <div></div>
      </div>
    );
};

export default Banner;
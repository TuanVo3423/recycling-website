import React from 'react';

type Props = {};

export const MyFeed = (props: Props) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-5 w-auto h-auto ml-1">
      <div className="w-[400px] h-[400px] border-gray-300 cursor-pointer hover:opacity-75">
        <img
          src="https://cdn.vnreview.vn/524288_141218525055777_1847291203813376?wt=310bb374e23b5e38073cb93b18733881&rt=3aa018865eb3fadcaae3924d41bd5783"
          className="h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>

      <div className="w-[400px] h-[400px] border-gray-300 cursor-pointer hover:opacity-75">
        <img
          src="https://cdn.vnreview.vn/524288_141218525055777_1847291203813376?wt=310bb374e23b5e38073cb93b18733881&rt=3aa018865eb3fadcaae3924d41bd5783"
          className="h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>

      <div className="w-[400px] h-[400px] border-gray-300 cursor-pointer hover:opacity-75">
        <img
          src="https://cdn.vnreview.vn/524288_141218525055777_1847291203813376?wt=310bb374e23b5e38073cb93b18733881&rt=3aa018865eb3fadcaae3924d41bd5783"
          className="h-[400px] w-[400px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

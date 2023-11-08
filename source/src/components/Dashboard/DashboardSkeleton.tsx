import React from "react";
import Skeleton from "react-loading-skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="mx-10 md:mx-64">
      <Skeleton className="h-14 w-44 rounded-xl font-rowdies font-bold text-black" />
      <div className="mt-10 flex flex-col md:flex-row">
        <div className="w-2/3">
          <p className="text-md pr-5 text-justify font-poppins leading-relaxed">
            <Skeleton count={5} />
          </p>
          <div className="mt-10 h-11 w-3/5 cursor-pointer rounded-3xl shadow-xl ">
            <Skeleton />
          </div>
        </div>
        <Skeleton className="mt-10 flex items-center md:mx-16 md:mt-0 md:h-1/2 md:w-full md:rounded-full" />
      </div>
    </div>
  );
};

export default DashboardSkeleton;

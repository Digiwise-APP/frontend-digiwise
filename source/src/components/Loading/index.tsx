import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <SkeletonTheme
      baseColor="#D3D3D3"
      highlightColor="#f5f5f5"
      borderRadius="0.5rem"
      duration={3}
    >
      <div className="rounded-[20px] bg-[#D9D9D9]">
        <p className="text-center text-[20px] ">
          <Skeleton width={500} height={20} />
        </p>
        <p className="mt-[20px] text-left font-poppins text-[12px] leading-[30px] text-black md:mt-[46px]">
          <Skeleton count={7} height={20} />
        </p>
        <div className="mt-[40px] flex items-center justify-between md:mt-[93px]">
          <Skeleton height="40px" width="150px" />
          <Skeleton height="40px" width="150px" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Loading;

import React, { useEffect, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import { getUserMedal } from "../api/user";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSkeleton from "../components/Dashboard/DashboardSkeleton";
import ArticleCarousel from "../components/LandingPage/ArticleCarousel";

import { useNavigate } from "react-router-dom";
import FakeNewsCard from "../components/Dashboard/FakeNewsCard";
import Skeleton from "react-loading-skeleton";

type UserMedal = {
  level: number;
  medal: string;
  description: string;
};

const Dashboard = () => {
  const [userMedal, setUserMedal] = useState<UserMedal>();

  useEffect(() => {
    getUserMedal().then((res) => {
      const data = res.data[0];

      const level = (data.level / 5) * 100;
      console.log(level);
      setUserMedal({
        description: data.description,
        level: level,
        medal: data.medal,
      } as UserMedal);
    });
  }, []);

  return (
    <div className="h-full min-h-full w-full bg-[#EEF2F6] pb-24 pt-10">
      {userMedal ? (
        <DashboardHeader
          level={userMedal?.level}
          description={userMedal?.description}
          medal={userMedal?.medal}
        />
      ) : (
        <DashboardSkeleton />
      )}
      {userMedal ? (
        <div className="mx-3 my-10 md:mx-64">
          <ArticleCarousel />
        </div>
      ) : (
        <div className="mx-3 my-10 h-96 md:mx-64">
          <Skeleton className="h-36" />
        </div>
      )}
      {userMedal ? (
        <FakeNewsCard />
      ) : (
        <div className="mx-3 my-10 h-96 md:mx-64">
          <Skeleton className="h-36" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React from "react";
import ProfilePicture from "../../assets/team_picture.png";
import LinkedinQR from "../../assets/linkedin_qr.png";

type MemberCardProps = {
  name: string;
  profilePicture: string;
  linkedinQR: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  profilePicture,
  linkedinQR,
}) => {
  return (
    <div className="mx-5 h-[435px] w-[200px] rounded-t-full border-4 border-bgSidebarButton bg-white pt-2">
      <div
        className="relative mx-auto mt-5 h-[170px] w-[170px] rounded-[50%] border-8 border-blue-200 bg-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profilePicture})` }}
      ></div>
      <p className="text-poppins mt-5 text-center text-3xl font-bold text-bgSidebar">
        {name}
      </p>
      <img
        src={linkedinQR}
        className="mx-auto mt-2 flex w-4/5 cursor-pointer hover:rounded-xl hover:border-2 hover:border-bgSidebar hover:shadow-2xl"
        onClick={() => {
          window.open("https://linkedin.com/in/rifqoi", "_blank", "noreferrer");
        }}
      />
    </div>
  );
};

export default MemberCard;

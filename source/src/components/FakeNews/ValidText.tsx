import React from "react";

type ValidTextProps = {
  validity?: boolean;
};

const ValidText: React.FC<ValidTextProps> = ({ validity = false }) => {
  return (
    <div
      className={`w-full rounded-xl px-10 py-5 text-xl text-black ${
        validity ? "bg-green-500" : "bg-red-500"
      }`}
    >
      The article is {validity ? "valid" : "not valid"}!
    </div>
  );
};

export default ValidText;

import React from "react";
import profileImage from "../../assets/kdh.jpg";
function TopNavigation() {
  return (
    <div className="w-full flex flex-row justify-between pt-1 px-2">
      <div className="flex justify-center items-center w-[35px] h-[35px] p-[1px] rounded-full ring-2 ring-cyber-heven-eve-green">
        <div className="bg-[url('./assets/kdh.jpg')] bg-no-repeat bg-cover bg-center w-[35px] h-[35px] rounded-[35px]"></div>
      </div>
    </div>
  );
}

export default TopNavigation;

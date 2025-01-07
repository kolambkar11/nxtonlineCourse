import Image from "next/image";
import React from "react";

const Welcomebanner = () => {
  return (
    <div>
      <div className="flex gap-5 items-center bg-white rounded-xl p-5">
        <Image
          src={"/panda.png"}
          alt="Welcome banner Image"
          width={100}
          height={100}
        />
        <div>
          <h2 className="font-bold text-[29px]">
            Welcome to <span className="text-primary">Online Course</span>{" "}
            Academy
          </h2>
          <h2 className="text-gray-500">Explore everywhere</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcomebanner;

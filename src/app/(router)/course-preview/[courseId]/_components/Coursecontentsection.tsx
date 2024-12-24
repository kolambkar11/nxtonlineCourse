import { Lock, LockIcon, Play } from "lucide-react";
import React, { useState } from "react";

const Coursecontentsection = ({ courseInfo }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="p-3 bg-white rounded-sm">
        <h1>Contents</h1>
        {courseInfo.courseLists[0].chapter.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h2
                className={`flex justify-between items-center p-2 text-[14px] border rounded-sm px-4 cursor-pointer m-2 hover:bg-gray-200 text-gray-500 ${
                  activeIndex == index && "bg-primary text-white"
                }`}
              >
                {index + 1}. {item.name}
                {activeIndex == index ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Coursecontentsection;

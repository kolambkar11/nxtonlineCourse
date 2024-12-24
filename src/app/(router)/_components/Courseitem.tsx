import Image from "next/image";
import React from "react";

const Courseitem = (props: any) => {
  return (
    <>
      <div className="border rounded-xl hover:shadow-md transition-all cursor-pointer hover:shadow-purple-300">
        <Image
          src={props.course?.banner?.url}
          width={500}
          height={150}
          alt="banner"
          className="rounded-t-xl"
          priority
        />
        <div className="flex flex-col gap-1 p-2">
          <h2 className="font-bold text-[11px]">{props.course.name}</h2>
          <h2 className="text-[10px] text-gray-400">{props.course.author}</h2>
          {props.course?.chapter?.length === 0 ? (
            <>
              <div className="flex gap-2">
                <Image
                  src={"/youtube.png"}
                  alt="YouTube"
                  width={20}
                  height={20}
                  priority
                />
                <h2 className="text-[14px] text-gray-400">Watch on YouTube</h2>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2">
                <Image
                  src={"/chapter.png"}
                  alt="YouTube"
                  width={20}
                  height={20}
                />
                <h2 className="text-[14px] text-gray-400">Chapter</h2>
              </div>
            </>
          )}
          <h2>{props.course?.free ? "Free" : "Paid"}</h2>
        </div>
      </div>
    </>
  );
};

export default Courseitem;

import Videoplayer from "@/app/(router)/_components/Videoplayer";
import React from "react";
import Markdown from "react-markdown";

const Coursevideodescription = (props: any) => {
  const datas = props.courseInfo.courseLists[0];
  return (
    datas && (
      <>
        <h1 className="text-[20px] font-semibold">{datas.name}</h1>
        <h1 className="text-gray-500 text-[14px]">{datas.author}</h1>
        {/* videoplayer */}
        <Videoplayer videoUrl={datas} />
        <h2 className="mt-5 text-[17px] font-semibold">About this course</h2>
        <div>
          <Markdown className="text-[14px] font-light mt-2 leading-6">
            {datas.description}
          </Markdown>
        </div>
      </>
    )
  );
};

export default Coursevideodescription;

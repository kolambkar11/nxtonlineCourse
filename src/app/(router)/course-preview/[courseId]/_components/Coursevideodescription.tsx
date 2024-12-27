import Videoplayer from "@/app/(router)/_components/Videoplayer";
import React from "react";
import Markdown from "react-markdown";

// Define the interfaces for the expected data structure
interface IChapter {
  video: {
    url: string;
  };
}

interface ICourse {
  name: string;
  author: string;
  description: string;
  banner: {
    url: string;
  };
  chapter: IChapter[];
}

interface ICourseInfo {
  courseLists: ICourse[];
}

interface CourseVideoDescriptionProps {
  courseInfo: ICourseInfo;
}

const Coursevideodescription: React.FC<CourseVideoDescriptionProps> = (
  props
) => {
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

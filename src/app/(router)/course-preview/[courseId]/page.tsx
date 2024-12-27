"use client";

import React, { useEffect, useState } from "react";
import Coursevideodescription from "./_components/Coursevideodescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import Courseenrollment from "./_components/Courseenrollment";
import Coursecontentsection from "./_components/Coursecontentsection";
// Course Params Interface
interface CourseParams {
  courseId: string;
}

interface CoursePreviewProps {
  params: Promise<CourseParams>;
}

// Updated IChapter and ICourse interfaces
interface IChapter {
  name: string;
  video: string;
  url: string;
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
  free: boolean;
  courseLists: ICourse[];
}

const Coursepreview: React.FC<CoursePreviewProps> = (props) => {
  const [courseInfo, setCourseInfo] = useState<ICourseInfo | null>(null);
  const [courseId, setCourseId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await props.params; // Resolve the params Promise
        setCourseId(resolvedParams?.courseId); // Extract the courseId
      } catch (error) {
        console.error("Error resolving params:", error);
      }
    };

    fetchParams();
  }, [props.params]);

  useEffect(() => {
    if (courseId) {
      getCourseInforById(courseId);
    }
  }, [courseId]);

  const getCourseInforById = (id: string) => {
    GlobalApi.getCourseByID(id)
      .then((resp) => {
        const result = resp as ICourseInfo; // Type assertion
        setCourseInfo(result);
        console.log(result);
      }) // No explicit type assertion needed if GlobalApi.getCourseByID is correctly typed
      .catch((error) => console.error("Error fetching course info:", error));
  };

  // Return loading state if courseInfo is null
  if (!courseInfo) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={"animate-spin"}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* title, video, description */}
      <div className="col-span-2 bg-white p-3 rounded-xl">
        <Coursevideodescription courseInfo={courseInfo} />
      </div>
      {/* course content */}
      <div>
        <Courseenrollment courseInfo={courseInfo} />
        <Coursecontentsection courseInfo={courseInfo} />
      </div>
    </div>
  );
};

export default Coursepreview;

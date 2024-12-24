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
  name: string; // Assuming name is required and there is no optional `video` property
}

interface ICourse {
  name: string;
  author: string;
  description: string;
  banner: {
    url: string;
  };
  chapter: IChapter[]; // Chapter array should contain IChapter, not with video property
}

interface ICourseInfo {
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
      .then((resp) => setCourseInfo(resp)) // No explicit type assertion needed if GlobalApi.getCourseByID is correctly typed
      .catch((error) => console.error("Error fetching course info:", error));
  };

  // Return loading state if courseInfo is null
  if (!courseInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* title, video, description */}
      <div className="col-span-2 bg-white p-3 rounded-xl">
        <Coursevideodescription courseInfo={courseInfo} />
      </div>
      {/* course content */}
      <div>
        <Courseenrollment />
        <Coursecontentsection courseInfo={courseInfo} />
      </div>
    </div>
  );
};

export default Coursepreview;

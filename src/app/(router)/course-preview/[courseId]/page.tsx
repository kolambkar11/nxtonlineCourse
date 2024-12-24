"use client";

import React, { useEffect, useState } from "react";
import Coursevideodescription from "./_components/Coursevideodescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import Courseenrollment from "./_components/Courseenrollment";
import Coursecontentsection from "./_components/Coursecontentsection";

const Coursepreview = (props: any) => {
  const [courseInfo, setCourseInfo] = useState<any>(null);
  const [courseId, setCourseId] = useState<string | null>(null);

  try {
    useEffect(() => {
      const fetchParams = async () => {
        const resolvedParams = await props.params; // Resolve the params Promise
        setCourseId(resolvedParams?.courseId); // Extract the courseId
      };

      fetchParams();

      if (courseId) {
        getCourseInforById(courseId);
      }
    }, [props.params, courseId]);

    const getCourseInforById = (id: string) => {
      GlobalApi.getCourseByID(id).then((resp) => {
        setCourseInfo(resp);
      });
    };
  } catch (error) {
    console.log("Error", error);
  }

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3 ">
        {/* title, video, description */}
        <div className="col-span-2 bg-white p-3 rounded-xl">
          {courseInfo ? <Coursevideodescription courseInfo={courseInfo} /> : ""}
        </div>
        {/* course content */}
        <div>
          <Courseenrollment />
          <Coursecontentsection courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
};

export default Coursepreview;

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
interface IChapter {
  name: string;
  video: string;
  url: string;
  id: string;
}

interface ICourseList {
  chapter: IChapter[];
}

interface ICourseInfo {
  slug: string;

  free: boolean;
  courseLists: ICourseList[];
}

interface CourseContentSectionProps {
  courseInfo: ICourseInfo;
}
// const Courseenrollment = (courseInfo) => {

const Courseenrollment: React.FC<CourseContentSectionProps> = ({
  courseInfo,
}) => {
  const { user } = useUser();
  // const email = user?.primaryEmailAddress?.emailAddress;
  const membership = true;

  // const onEnrollToCourse = () => {
  //   console.log(courseInfo.courseLists.id);

  //   GlobalApi.enrollToCourse(courseInfo?.slug, email).then((resp) => {
  //     console.log("resp", resp);
  //     //show toast here
  //   });
  // };

  return (
    <>
      <div className="p-3 text-center rounded-sm bg-primary ">
        <h2 className="text-[22px] font-bold text-white">
          Enroll to the Course
        </h2>
        {/* user logged in and have membership */}
        {user && (membership || courseInfo.free) ? (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Enroll Now to Start Learning and Building the Project
            </h2>
            <Button
              className="bg-white text-primary hover:bg-white hover:text-primary"
              onClick={() => {
                // onEnrollToCourse();
              }}
            >
              Enroll Now
            </Button>
          </div>
        ) : !user ? (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Enroll Now to Start Learning and Building the Project
            </h2>
            <Link href={"/sign-in"}>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Enroll Now
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* user doesnot have membershio and has not logged in */}
            <div className="flex flex-col gap-3 mt-3">
              <h2 className="text-white font-light">
                Buy Monthly Membership and get access to all the courses
              </h2>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary">
                Buy Membership just $2.99
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Courseenrollment;

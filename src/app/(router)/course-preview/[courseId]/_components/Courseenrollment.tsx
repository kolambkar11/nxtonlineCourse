import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Courseenrollment = () => {
  const { user } = useUser();
  console.log(useUser());

  console.log("isLoaded", user);
  return (
    <>
      <div className="p-3 text-center rounded-sm bg-primary ">
        <h2 className="text-[22px] font-bold text-white">
          Enroll to the Course
        </h2>
        {/* user logged in and have membership */}
        {user !== null || undefined ? (
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Enroll Now to Start Learning and Building the Project
            </h2>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Enroll Now
            </Button>
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

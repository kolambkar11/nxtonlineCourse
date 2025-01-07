"use client";
import React from "react";
import Welcomebanner from "./_components/Welcomebanner";
import Courselist from "../_components/Courselist";
import Sidebanners from "../_components/Sidebanners";

const Courses = () => {
  return (
    <div className="grid grid-col md:grid-cols-4 p-5 gap-5">
      {/* left-container */}
      <div className="col-span-3">
        <Welcomebanner />
        {/* Course List Section */}
        <Courselist />
      </div>
      {/* right-container */}
      <div className="p-5 bg-white rounded-xl">
        <Sidebanners />
      </div>
    </div>
  );
};

export default Courses;

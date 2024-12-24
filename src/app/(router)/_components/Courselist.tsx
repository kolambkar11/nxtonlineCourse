import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Courseitem from "./Courseitem";
import Link from "next/link";

interface ICourse {
  slug: string;
  length: number;
  item: string;
  courseList: string[];
  courseLists: string[];
  setCourseList: Array<[]>;
}

const Courselist = () => {
  const [courseList, setCourseList] = useState<ICourse[]>([]);

  const getAllCourse = () => {
    GlobalApi.getAllCourseList().then((resp: any) => {
      const result = resp?.courseLists;
      setCourseList(result);
    });
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      {/* title and filter */}
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* display course list */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courseList?.length > 0
          ? courseList.map((item, index: number) => {
              return (
                <Link href={`/course-preview/` + item.slug} key={index}>
                  <div>
                    <Courseitem course={item} />
                  </div>
                </Link>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
                ></div>
              );
            })}
      </div>
    </div>
  );
};

export default Courselist;

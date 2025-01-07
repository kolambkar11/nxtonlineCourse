"use client";
import { useUser } from "@clerk/nextjs";
import {
  BadgeIcon,
  BlocksIcon,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  MailOpenIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidenav = () => {
  const { user } = useUser();
  const menu = [
    {
      id: 1,
      name: "Dashboard",
      icon: BlocksIcon,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 2,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 3,
      name: "Store",
      icon: LayoutGrid,
      path: "/store",
      auth: true,
    },
    {
      id: 4,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership",
      auth: true,
    },
    {
      id: 5,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/beInstructor",
      auth: true,
    },
    {
      id: 6,
      name: "Newsletter ",
      icon: MailOpenIcon,
      path: "/newsletter",
      auth: true,
    },
  ];

  const path = usePathname();
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={170}
        height={80}
        priority
        className="w-full h-auto"
      />
      <hr className="mt-5" />
      <div className="mt-8">
        {menu.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div
                className={`"group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out ${
                  path.includes(item.path) && "bg-primary text-white"
                }`}
              >
                <item.icon className="group-hover:animate-bounce" />{" "}
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;

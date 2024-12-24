"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      isLoaded && router.push("/courses");
    }
  }, [user]);
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Page;

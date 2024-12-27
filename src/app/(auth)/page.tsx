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
    } else if (isLoaded) {
      router.push("/courses");
    }
  }, [user, isLoaded, router]); // Added isLoaded to the dependency array

  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default Page;

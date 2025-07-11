"use client";

import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const { data: authUser } = useGetAuthUserQuery();
  console.log("authUser:", authUser);

  return (
    <div className="h-full w-full">
      <Navbar />
      <main className={`h-full w-full flex flex-col`}>{children}</main>
    </div>
  );
};

export default layout;

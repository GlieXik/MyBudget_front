"use client";
import { nanoid } from "@reduxjs/toolkit";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export default function Navigation() {
  const nav = [
    {
      icon: AiFillHome,
      name: "Home",
      path: "/",
    },
    {
      icon: AiFillPlusCircle,
      name: "Add payments",
      path: "/add",
    },
    {
      icon: FaUserAlt,
      name: "User",
      path: "/user",
    },
  ];
  const navLength = nav.length;
  const pathname = usePathname();

  return (
    <div className="fixed  z-50 w-full h-16 max-w-sm -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className={`grid  grid-cols-3 mx-auto         h-full max-w-sm`}>
        {nav.map((item, index) => {
          const { icon: Icon } = item;
          return (
            <Link
              key={nanoid()}
              href={item.path}
              data-tooltip-target="tooltip-home"
              type="button"
              className={
                index === 0
                  ? "inline-flex  items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  : index === navLength - 1
                  ? "inline-flex  items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  : "inline-flex  items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              }
            >
              <Icon
                style={
                  index === 0 || index === navLength - 1
                    ? { fontSize: "20px", color: "rgb(107 114 128)" }
                    : { fontSize: "40px", color: "#1d4ed8" }
                }
              />

              <span className="sr-only">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

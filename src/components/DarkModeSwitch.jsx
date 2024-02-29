"use client";
import React, { useEffect, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <IoSunnyOutline
          className="text-xl cursor-pointer  hover:text-purple-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <IoMoon
          className="text-xl cursor-pointer  hover:text-purple-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;

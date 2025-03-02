"use client";

import { useEffect } from "react";

import useToggleTheme from "@/hooks/useToggleTheme";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { isSystemDarkTheme } from "@/utils/theme";

import Sun from "@/svgs/sun.svg";
import Moon from "@/svgs/moon.svg";

export interface ThemeWidgetProps {
  className?: string;
}

function ThemeWidget({ className }: ThemeWidgetProps) {
  const [, toggleTheme] = useToggleTheme();

  useEffect(() => {
    if (
      localStorage.theme ? localStorage.theme === "dark" : isSystemDarkTheme()
    ) {
      toggleTheme("dark");
    }
  }, [toggleTheme]);

  return (
    <div
      className={mergeClassNames(
        "w-12 h-12 bg-background rounded-lg overflow-hidden shadow-[1px_2px_6px_0px] shadow-black linear-transition-color",
        className
      )}
      onClick={() => toggleTheme()}
    >
      <div
        className={mergeClassNames(
          "absolute w-12 h-12 flex justify-center items-center",
          "origin-[50%_100%] animate-[rise_0.2s_forwards] dark:animate-[set_0.2s_forwards]"
        )}
      >
        <Sun className="fill-yellow-400" />
      </div>
      <div
        className={mergeClassNames(
          "absolute w-12 h-12 flex justify-center items-center",
          "origin-[50%_100%] animate-[set_0.2s_forwards] dark:animate-[rise_0.2s_forwards]"
        )}
      >
        <Moon className="fill-yellow-400" />
      </div>
    </div>
  );
}

export default ThemeWidget;

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "../ui/switch";

export function ModeSwitch() {
  const { setTheme } = useTheme();
  const [isDarkMode, setisDarkMode] = React.useState(false);

  function onSwithChange() {
    if (isDarkMode) {
      setTheme("light");
      setisDarkMode(false);
    } else {
      setTheme("dark");
      setisDarkMode(true);
    }
  }


  return (
    <>
      <div data-testid='switchContainer' className="flex justify-center items-center gap-2">
      <Sun className="h-[1.2rem] w-[1.2rem]" />
        <Switch checked={isDarkMode} onCheckedChange={onSwithChange} />
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </div>
    </>
  );
}

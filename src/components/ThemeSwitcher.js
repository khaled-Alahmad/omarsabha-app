// app/components/ThemeSwitcher.tsx
"use client";

import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* <div>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div> */}

      <Switch
        defaultSelected
        size="sm"
        color="secondary"
        thumbIcon={({ isSelected, className }) => {
          isSelected
            ? setTheme("dark") && <SunIcon className={className} />
            : setTheme("light") && <MoonIcon className={className} />;
        }}
      >
        Dark mode
      </Switch>
    </>
  );
}

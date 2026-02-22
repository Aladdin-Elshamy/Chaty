"use client";
const DAISY_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "valentine",
  "halloween",
  "garden",
];

import React from "react";
import { useTheme } from "../Context/ThemeProvider";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export function ThemeSwitcher({
  variant = "auth",
}: {
  variant?: "auth" | "home";
}) {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      title="Change Theme"
      className={`dropdown col-span-2  ${variant === "home" ? "flex-1 dropdown-right flex" : "dropdown-end"}`}
    >
      <div
        tabIndex={0}
        role="button"
        aria-label="Change Theme"
        className={`btn btn-sm btn-ghost gap-1.5 group ${variant === "home" ? " w-full justify-center px-2.5 py-1.5 hover:border-none hover:bg-inherit hover:shadow-[0] focus-visible:bg-none" : "px-1"}`}
      >
        <div
          className={`bg-base-100 border-base-content/10 group-hover:border-base-content/20 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors `}
        >
          <div className="bg-base-content size-1 rounded-full" />
          <div className="bg-primary size-1 rounded-full" />
          <div className="bg-secondary size-1 rounded-full" />
          <div className="bg-accent size-1 rounded-full" />
        </div>
        <span
          className={`is-drawer-close:hidden text-left flex-1 text-sm font-normal`}
        >
          Theme
        </span>
        {/* <ChevronDownIcon className="mt-px hidden size-3 fill-current opacity-60 sm:inline-block" /> */}
      </div>

      <div
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box mt-2 w-60 max-h-[calc(100vh-8rem)] overflow-x-hidden overflow-y-auto border border-white/5 shadow-2xl"
      >
        <ul className="menu w-full">
          <li className="menu-title text-xs uppercase tracking-wide">Theme</li>

          {DAISY_THEMES.map((t) => (
            <li key={t}>
              <button
                type="button"
                className="gap-3 px-2"
                onClick={() => changeTheme(t)}
              >
                <div
                  data-theme={t}
                  className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
                >
                  <div className="bg-base-content size-1 rounded-full" />
                  <div className="bg-primary size-1 rounded-full" />
                  <div className="bg-secondary size-1 rounded-full" />
                  <div className="bg-accent size-1 rounded-full" />
                </div>

                <div className="w-28 truncate text-left capitalize">{t}</div>

                <CheckIcon
                  className={
                    theme === t
                      ? "h-3 w-3 shrink-0 text-primary"
                      : "h-3 w-3 shrink-0 text-base-content/30 invisible group-[.active]:visible"
                  }
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

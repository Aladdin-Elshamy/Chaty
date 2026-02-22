import { Dispatch, SetStateAction } from "react";

export default function Tabs({
  tab,
  setTab,
}: {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div
      role="tablist"
      className="tabs rounded-xl tabs-box mt-4 justify-center max-w-[90%] mx-auto bg-base-100"
    >
      <button
        role="tab"
        className={`${tab === 1 ? "bg-base-200 rounded-lg text-base-content border" : ""} tab flex-1`}
        onClick={() => setTab(1)}
      >
        Login
      </button>
      <button
        role="tab"
        className={`${tab === 2 ? "bg-base-200 rounded-lg text-base-content border" : "bg-base-100"} tab flex-1`}
        onClick={() => setTab(2)}
      >
        Sign Up
      </button>
    </div>
  );
}

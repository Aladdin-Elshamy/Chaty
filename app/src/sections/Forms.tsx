"use client";
import { useState } from "react";
import Tabs from "../components/Tabs";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

const Forms = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="bg-base-200 border-base-300 shadow-lg sm:w-md w-sm border mx-auto min-w-0 rounded-2xl my-4">
      <Tabs tab={tab} setTab={setTab} />
      {tab === 1 && <LoginForm />}
      {tab === 2 && <SignUpForm />}
    </div>
  );
};

export default Forms;

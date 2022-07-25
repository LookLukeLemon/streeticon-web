import { LOGIN, SIGN_UP } from "common/Constants";
import { useRouter } from "next/router";
import React from "react";

const NeedAuthTailContainer = () => {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <button
        className="btn btn--primary"
        onClick={() => router.push("/sign-in")}
      >
        {LOGIN}
      </button>
      <button className="btn" onClick={() => router.push("/sign-up")}>
        {SIGN_UP}
      </button>
    </div>
  );
};

export default NeedAuthTailContainer;

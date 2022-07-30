import { ARE_YOU_NEW, LOGIN, SIGN_UP } from "common/Constants";
import Link from "next/link";
import React from "react";

const SignInFunction = () => {
  return (
    <div className="w-full">
      <button className="btn btn--primary w-full font-semibold">{LOGIN}</button>
      <p className="text-xs text-zinc-400 text-right pt-4">
        {ARE_YOU_NEW}
        <Link href="/sign-up">
          <span className="cursor-pointer text-sky-500 font-medium">
            {SIGN_UP}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default SignInFunction;

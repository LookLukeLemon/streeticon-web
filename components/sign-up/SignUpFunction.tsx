import {
  ARE_YOU_MEMBER,
  LINK_LOGIN,
  LINK_SIGN_UP,
  POLICY,
} from "common/Constants";
import Link from "next/link";

const SignUpFunction = () => {
  return (
    <>
      <p className="text-zinc-400 text-xs">{POLICY}</p>

      <div className="w-full">
        <button className="btn btn--primary w-full font-semibold">
          {LINK_SIGN_UP}
        </button>
        <p className="text-xs text-zinc-400 text-right pt-4">
          {ARE_YOU_MEMBER}
          <Link href="/sign-in">
            <span className="text-sky-500 cursor-pointer font-medium">
              {LINK_LOGIN}
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpFunction;

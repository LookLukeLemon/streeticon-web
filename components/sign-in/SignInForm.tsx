import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import useSignIn from "./useSignIn";

const SignInForm = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const { signIn } = useSignIn();

  const handleSuccess = (accessToken: string) => {
    setAuth({ accessToken });
    router.replace("/");
  };

  const handleFail = (err: any) => {
    // FIXME: SHOW FAILED TOAST
  };

  return (
    <div className="sign-container">
      <form
        className="gap-8 border border-zinc-200 w-full flex flex-col p-8 rounded-xl"
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          signIn({ onSuccess: handleSuccess, onFail: handleFail });
        }}
      >
        {children}
      </form>
    </div>
  );
};

export default SignInForm;

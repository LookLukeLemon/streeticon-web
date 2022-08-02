import axios from "axios";
import { SignInProps } from "common/types";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import useSignUp from "./useSignUp";

const SignUpForm = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const { signUp } = useSignUp();

  const handleSuccess = async (signInProps: SignInProps) => {
    const response = await axios.post("/api/auth/user/sign-in", signInProps, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const accessToken = response?.data?.access_token;
    setAuth({ accessToken });
    router.replace("/");
  };

  const handleFail = (err: any) => {
    // FIXME: SHOW FAILED TOAST
  };

  return (
    <div className="sign-container">
      <form
        className="gap-8 border border-zinc-200 flex flex-col p-8 rounded-xl w-full"
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          signUp({ onSuccess: handleSuccess, onFail: handleFail });
        }}
      >
        {children}
      </form>
    </div>
  );
};

export default SignUpForm;

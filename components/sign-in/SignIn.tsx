import BaseImage from "components/common/BaseImage";
import React from "react";
import LogoImage from "public/images/logo-icon.svg";
import useSignIn from "./useSignIn";
import { APP_TITLE } from "common/Constants";
import EmailInput from "../common/EmailInput";
import PasswordInput from "../common/PasswordInput";
import SignInFunction from "./SignInFunction";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const { onChange } = useSignIn();

  return (
    <SignInForm>
      <h1 className="text-center font-medium text-xl">{APP_TITLE}</h1>
      <div className="relative h-20 aspect-square">
        <BaseImage src={LogoImage} layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <EmailInput onChange={onChange} />
        <PasswordInput onChange={onChange} />
      </div>

      <SignInFunction />
    </SignInForm>
  );
};

export default SignIn;

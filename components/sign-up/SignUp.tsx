import BaseImage from "components/common/BaseImage";
import React from "react";
import LogoImage from "public/images/logo-icon.svg";
import useSignUp from "./useSignUp";
import Link from "next/link";
import EmailInput from "components/common/EmailInput";
import PasswordInput from "components/common/PasswordInput";
import NicknameInput from "components/common/NicknameInput";
import NameInput from "components/common/NameInput";
import RegionInput from "components/common/RegionInput";
import SignUpFunction from "./SignUpFunction";
import { APP_TITLE } from "common/Constants";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const { onChange } = useSignUp();

  return (
    <SignUpForm>
      <h1 className="text-center font-medium text-xl">{APP_TITLE}</h1>
      <div className="relative h-20 aspect-square">
        <BaseImage src={LogoImage} layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <EmailInput onChange={onChange} />
        <NicknameInput onChange={onChange} />
        <NameInput onChange={onChange} />
        <RegionInput onChange={onChange} />
        <PasswordInput onChange={onChange} />
      </div>
      <SignUpFunction />
    </SignUpForm>
  );
};

export default SignUp;

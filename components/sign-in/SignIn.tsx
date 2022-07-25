import BaseImage from "components/common/BaseImage";
import React from "react";
import LogoImage from "public/images/logo-icon.svg";
import Link from "next/link";
import useSignIn from "./useSignIn";
import useSignInApi from "./useSignInApi";

const SignIn = () => {
  const { email, password, onChange } = useSignIn();
  const { onSubmit } = useSignInApi();

  return (
    <div className="sign-container">
      <form
        className="gap-8 border border-zinc-200 w-full flex flex-col p-8 rounded-xl"
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) =>
          onSubmit({
            e,
            email,
            password,
          })
        }
      >
        <h1 className="text-center font-medium text-xl">골목티콘</h1>
        <div className="relative h-20 aspect-square">
          <BaseImage src={LogoImage} layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <input
            className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
            placeholder="이메일"
            value={email}
            onChange={(e) => onChange(e, "email")}
          />

          <input
            className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => onChange(e, "password")}
          />
        </div>

        <div className="w-full">
          <button className="btn btn--primary w-full font-semibold">
            로그인
          </button>
          <p className="text-xs text-zinc-400 text-right pt-4">
            처음이신가요?
            <Link href="/sign-up">
              <span className="cursor-pointer text-sky-500 font-medium">
                회원가입
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import BaseImage from "components/common/BaseImage";
import React from "react";
import LogoImage from "public/images/logo-icon.svg";
import useSignUp from "./useSignUp";
import useSignUpApi from "./useSignUpApi";
import Link from "next/link";

const SignUp = () => {
  const { email, name, password, country, region, onChange } = useSignUp();
  const { onSubmit } = useSignUpApi();

  return (
    <div className="sign-container">
      <form
        className="gap-8 border w-full border-zinc-200 flex flex-col p-8 rounded-xl w-full"
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) =>
          onSubmit({
            e,
            email,
            name,
            password,
            country,
            region,
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
            placeholder="닉네임"
            value={name}
            onChange={(e) => onChange(e, "name")}
          />

          <input
            className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
            placeholder="지역"
            value={region}
            onChange={(e) => onChange(e, "region")}
          />

          <input
            className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => onChange(e, "password")}
          />
        </div>

        <p className="text-zinc-400 text-xs">
          가입을 클릭하면 약관, 개인정보 보호정책 및 쿠키 정책에 동의하는
          것입니다. 귀하는 당사로부터 SMS 알림을 받을 수 있으며 언제든지
          수신거부할 수 있습니다.
        </p>

        <div className="w-full">
          <button className="btn btn--primary w-full font-semibold">
            가입하기
          </button>
          <p className="text-xs text-zinc-400 text-right pt-4">
            이미 회원이신가요?{" "}
            <Link href="/sign-in">
              <span className="text-sky-500 cursor-pointer font-medium">
                로그인하기
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

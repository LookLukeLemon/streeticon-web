import { PASSWORD } from "common/Constants";
import { passwordAtom } from "common/store/sign-in";
import { SignInChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const Password = ({
  onChange,
}: {
  onChange: (props: SignInChangeProps) => void;
}) => {
  const password = useAtomValue(passwordAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={PASSWORD}
      type="password"
      value={password}
      onChange={(e) => onChange({ value: e.target.value, name: "password" })}
    />
  );
};

export default Password;

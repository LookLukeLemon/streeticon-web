import { EMAIL } from "common/Constants";
import { emailAtom } from "common/store/sign-in";
import { SignInChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const Email = ({
  onChange,
}: {
  onChange: (props: SignInChangeProps) => void;
}) => {
  const email = useAtomValue(emailAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={EMAIL}
      value={email}
      onChange={(e) => onChange({ value: e.target.value, name: "email" })}
    />
  );
};

export default Email;

import { PASSWORD } from "common/Constants";
import { passwordAtom } from "common/store";
import { InputChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const PasswordInput = ({
  onChange,
}: {
  onChange: (props: InputChangeProps) => void;
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

export default PasswordInput;

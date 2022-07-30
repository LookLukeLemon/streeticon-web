import { NICKNAME } from "common/Constants";
import { nicknameAtom } from "common/store/sign-up";
import { InputChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const NicknameInput = ({
  onChange,
}: {
  onChange: (props: InputChangeProps) => void;
}) => {
  const nickname = useAtomValue(nicknameAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={NICKNAME}
      value={nickname}
      onChange={(e) => onChange({ value: e.target.value, name: "nickname" })}
    />
  );
};

export default NicknameInput;

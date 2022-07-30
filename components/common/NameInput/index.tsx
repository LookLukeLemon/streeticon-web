import { NAME } from "common/Constants";
import { nameAtom } from "common/store/sign-up";
import { InputChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const NameInput = ({
  onChange,
}: {
  onChange: (props: InputChangeProps) => void;
}) => {
  const name = useAtomValue(nameAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={NAME}
      value={name}
      onChange={(e) => onChange({ value: e.target.value, name: "name" })}
    />
  );
};

export default NameInput;

import { REGION } from "common/Constants";
import { regionAtom } from "common/store/sign-up";
import { InputChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const RegionInput = ({
  onChange,
}: {
  onChange: (props: InputChangeProps) => void;
}) => {
  const region = useAtomValue(regionAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={REGION}
      value={region}
      onChange={(e) => onChange({ value: e.target.value, name: "region" })}
    />
  );
};

export default RegionInput;

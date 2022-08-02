import { COUNTRY } from "common/Constants";
import { countryAtom } from "common/store/sign-up";
import { InputChangeProps } from "common/types";
import { useAtomValue } from "jotai";
import React from "react";

const CountryInput = ({
  onChange,
}: {
  onChange: (props: InputChangeProps) => void;
}) => {
  const country = useAtomValue(countryAtom);

  return (
    <input
      className="border rounded-lg bg-zinc-50 border-zinc-200 px-4 py-2 outline-pink-500"
      placeholder={COUNTRY}
      value={country}
      onChange={(e) => onChange({ value: e.target.value, name: "country" })}
    />
  );
};

export default CountryInput;

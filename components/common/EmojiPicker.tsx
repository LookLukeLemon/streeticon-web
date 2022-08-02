import React, { useEffect, useRef } from "react";
import data from "@emoji-mart/data";
import { PickerProps } from "emoji-mart";

const EmojiPicker = (props: PickerProps | Readonly<PickerProps> | any) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    import("emoji-mart").then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref });
    });
  }, []);

  return <div ref={ref} />;
};

export default EmojiPicker;

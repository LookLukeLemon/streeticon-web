import BaseImage from "components/common/BaseImage";
import PostUploader from "components/common/PostUploader";
import PlusImage from "public/images/plus-outline.svg";
import { useState } from "react";
import NewPostStepper from "./NewPostStepper";

const NewPostWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="relative cursor-pointer h-6 aspect-square"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
      </div>
      <PostUploader isOpen={isOpen} onIsOpen={setIsOpen}>
        <NewPostStepper />
      </PostUploader>
    </>
  );
};

export default NewPostWrapper;

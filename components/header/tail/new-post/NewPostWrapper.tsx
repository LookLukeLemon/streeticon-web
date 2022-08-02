import BaseImage from "components/common/BaseImage";
import FadePopup from "components/common/FadePopup";
import PlusImage from "public/images/plus-outline.svg";
import { useState } from "react";
import NewPostStep from "./NewPostStep";

export type NewPostStepProps = {
  onSuccess: () => void;
};

const NewPostWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleUploadSucess = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="relative cursor-pointer h-6 aspect-square"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
      </div>
      <FadePopup isOpen={isOpen} onIsOpen={setIsOpen}>
        <NewPostStep onSuccess={handleUploadSucess} />
      </FadePopup>
    </>
  );
};

export default NewPostWrapper;

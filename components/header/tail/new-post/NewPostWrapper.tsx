import BaseImage from "components/common/BaseImage";
import PostUploader from "components/common/PostUploader";
import { useRouter } from "next/router";
import PlusImage from "public/images/plus-outline.svg";
import { useState } from "react";
import NewPostStep from "./NewPostStep";

export type NewPostStepProps = {
  onSuccess: () => void;
};

const NewPostWrapper = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleUploadSucess = () => {
    setIsOpen(false);
    router.replace("/");
  };
  return (
    <>
      <div
        className="relative cursor-pointer h-6 aspect-square"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
      </div>
      <PostUploader isOpen={isOpen} onIsOpen={setIsOpen}>
        <NewPostStep onSuccess={handleUploadSucess} />
      </PostUploader>
    </>
  );
};

export default NewPostWrapper;

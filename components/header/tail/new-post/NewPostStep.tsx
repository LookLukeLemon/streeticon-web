import BaseImage from "components/common/BaseImage";
import NewPostImage from "public/images/new-post.svg";
import BackImage from "public/images/back.svg";
import EmojiImage from "public/images/emoji.svg";
import { useRef, useState } from "react";
import { convertToBase64 } from "utils/ImageUtils";
import { POST_MAX_LENGTH } from "common/Constants";
import { formatByThousandComma } from "utils";
import { NewPostStepProps } from "./NewPostWrapper";
import usePostFeed from "hooks/usePostFeed";
import LoadingSpinner from "components/common/LoadingSpinner";

const NewPostStep = ({ onSuccess }: NewPostStepProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [postingText, setPostingText] = useState("");
  const [thumbnailBase64, setThumbnailBase64] = useState<string | null>("");
  const { mutate, isLoading } = usePostFeed(onSuccess);

  const handleImageChange = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const thumbnailBase64 = (await convertToBase64(fileObj)) as string;
    setThumbnailBase64(thumbnailBase64);
  };

  const handlePostingTextChange = (e: any) => {
    setPostingText(e.target.value);
  };

  const handleSubmitPosting = async (e: any) => {
    e.preventDefault();
    if (postingText.length === 0 || !thumbnailBase64) return;

    await mutate({
      desc: postingText,
      image: thumbnailBase64,
    });
  };

  return (
    <form
      className="divide-y divide-zinc-200 overflow-hidden"
      onSubmit={handleSubmitPosting}
    >
      {thumbnailBase64 ? (
        <div className="p-2.5 flex text-sm font-semibold px-4">
          <button
            type="button"
            className="relative h-5 aspect-square"
            onClick={() => setThumbnailBase64("")}
          >
            <BaseImage src={BackImage} layout="fill" objectFit="cover" />
          </button>
          <h2 className="flex-1 text-center truncate">새 포스트</h2>
          <div className="w-20 flex justify-end items-center">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button
                className="px-2 text-sky-500"
                onClick={handleSubmitPosting}
              >
                올리기
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-2.5 text-sm font-semibold text-center">새 포스트</div>
      )}
      {thumbnailBase64 ? (
        <div className="flex flex-col md:flex-row text-sm">
          <div className="relative flex-1 aspect-square">
            <BaseImage src={thumbnailBase64} layout="fill" objectFit="cover" />
          </div>
          <div className="md:w-80 p-4">
            <textarea
              placeholder="스토리를 남겨보세요"
              className="w-full outline-none"
              maxLength={POST_MAX_LENGTH}
              rows={7}
              onChange={handlePostingTextChange}
            />
            <div className="flex text-zinc-300">
              <div className="relative h-5 aspect-square">
                <BaseImage src={EmojiImage} layout="fill" objectFit="cover" />
                {/* <div className="absolute top-0 left-0">
                  <EmojiPicker />
                </div> */}
              </div>
              <div className="flex-1 text-end">{`${
                postingText.length
              }/${formatByThousandComma(POST_MAX_LENGTH, 0)}`}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 py-20">
          <div className="relative w-24 aspect-square">
            <BaseImage src={NewPostImage} layout="fill" objectFit="contain" />
          </div>
          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            capture="environment"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleImageChange}
          >
            이미지 선택하기
          </button>
        </div>
      )}
    </form>
  );
};

export default NewPostStep;

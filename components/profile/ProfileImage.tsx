import BaseImage from "components/common/BaseImage";
import { StaticImageData } from "next/image";
import UserAnonymousImage from "public/images/user-anonymous.jpeg";
import { memo } from "react";

const ProfileImage = ({
  image,
  onClick,
}: {
  image: string | StaticImageData;
  onClick: () => void;
}) => {
  return (
    <>
      {image ? (
        <div
          className="cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full mx-4 sm:mx-8 md:mx-16"
          onClick={onClick}
        >
          <div className="bg-white  flex items-center justify-center aspect-square rounded-full m-0.5">
            <div className="rounded-full aspect-square m-0.5">
              <div className="relative aspect-square h-16 sm:h-32  lg:h-40 overflow-hidden rounded-full">
                <BaseImage src={image} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="cursor-pointer rounded-full mx-4 sm:mx-8 md:mx-16"
          onClick={onClick}
        >
          <div className="relative aspect-square h-16 sm:h-40 overflow-hidden rounded-full">
            <BaseImage
              src={UserAnonymousImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ProfileImage, (prev, next) => prev.image === next.image);

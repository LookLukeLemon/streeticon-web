import React, { Fragment } from "react";
import PlacesImage from "public/images/places.svg";
import PlusImage from "public/images/plus-outline.svg";
import SendImage from "public/images/send.svg";
import LikeImage from "public/images/like.svg";
import UserImage from "public/images/user.svg";
import SettingImage from "public/images/setting.svg";
import BookmarkImage from "public/images/bookmark.svg";
import BaseImage from "components/common/BaseImage";
import useAuth from "hooks/useAuth";
import useProfile from "hooks/useProfile";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { useRouter } from "next/router";
import {
  LOGOUT,
  USER_FAVORITES,
  USER_PROFILE,
  USER_SETTING,
} from "common/Constants";
import { Menu, Transition } from "@headlessui/react";

const AuthenticatedTailContainer = () => {
  const { setAuth } = useAuth();
  const { data: profile } = useProfile();
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await axiosPrivate.get("/api/auth/user/sign-out");
      router.replace("/sign-in");
    } catch (err) {
      router.replace("/");
    } finally {
      setAuth(null);
    }
  };

  return (
    <>
      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={SendImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={PlusImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={PlacesImage} layout="fill" objectFit="cover" />
      </div>
      <div className="relative cursor-pointer h-6 aspect-square">
        <BaseImage src={LikeImage} layout="fill" objectFit="cover" />
      </div>

      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex w-full justify-center">
          <div className="relative cursor-pointer h-6 aspect-square">
            <BaseImage src={UserImage} layout="fill" objectFit="cover" />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden text-sm">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-zinc-50"
                  } group flex w-full items-center rounded-md px-4 gap-4 py-2.5`}
                  onClick={() => router.push(`/profile/${profile?.name}`)}
                >
                  <div className="relative cursor-pointer h-4 aspect-square">
                    <BaseImage
                      src={UserImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  {USER_PROFILE}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-zinc-50"
                  } group flex w-full items-center rounded-md px-4 gap-4 py-2.5`}
                  onClick={() =>
                    router.push(`/profile/${profile?.name}/favorites`)
                  }
                >
                  <div className="relative cursor-pointer h-4 aspect-square">
                    <BaseImage
                      src={BookmarkImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  {USER_FAVORITES}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-zinc-50"
                  } group flex w-full items-center rounded-md px-4 gap-4 py-2.5`}
                  onClick={() => router.push(`/accounts/edit`)}
                >
                  <div className="relative cursor-pointer h-4 aspect-square">
                    <BaseImage
                      src={SettingImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  {USER_SETTING}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-zinc-50"
                  } group flex border-t border-zinc-200 w-full items-center px-4 py-2.5`}
                  onClick={handleSignOut}
                >
                  {LOGOUT}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default AuthenticatedTailContainer;

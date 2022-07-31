import { UseMutateFunction } from "@tanstack/react-query";
import { PostFeedCommentProps } from "hooks/usePostFeedComment";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type JotaiApiCallback = {
  onSuccess: any;
  onFail: any;
};

export type PostCommentApiCallback = {
  action: UseMutateFunction<any, unknown, PostFeedCommentProps, void>;
  params: any;
  onSuccess: any;
  onFail: any;
};

export type SignInProps = {
  username: string;
  password: string;
};

export type InputChangeProps = {
  value: string;
  name: string;
};

export type UserProfile = {
  name: string;
  nickname: string;
  desc: string;
  country: string;
  region: string;
  address: string;
  image: string | StaticImageData;
  phone: string;
  email: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  createdAt: string;
};

export type StorySummary = {
  id: string;
  image: string | StaticImageData;
  name: string;
};

export type SuggestionSummary = {
  id: string;
  image: string | StaticImageData;
  title: string;
  desc: string;
};

export type TrendingFeedSummary = {
  image: string | StaticImageData;
};

export type FeedItemWriterProps = {
  image: StaticImageData | string;
  name: string;
  country: string;
  region: string;
  desc: string;
};

export type FeedItemProps = {
  feedNumber: string;
  desc: string;
  writer: FeedItemWriterProps;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  likePeople: FeedItemWriterProps[];
  commentCount: number;
  comments: [];
  image: StaticImageData;
  page: number;
  refetch: () => void;
};

export type InfiniteGifticonListProps = {
  children: ReactNode;
  itemsLength: number;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};

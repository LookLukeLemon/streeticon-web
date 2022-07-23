import { StaticImageData } from "next/image";

export type UserProfile = {
  name: string;
  desc: string;
  country: string;
  region: string;
  address: string;
  image: string;
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

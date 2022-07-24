import { QUERY_KEY_SUGGESTIONS } from "common/Constants";
import { SuggestionSummary } from "common/store";
import { useQuery } from "@tanstack/react-query";
import BlueBottleLogo from "public/images/bluebottle-logo.svg";
import StarbucksLogo from "public/images/starbucks-logo.svg";
import WomenImage1 from "public/images/women-1.jpg";
import WomenImage4 from "public/images/women-4.jpg";
import WomenImage5 from "public/images/women-5.jpeg";
import MenImage1 from "public/images/men-1.jpg";
import useAxiosPrivate from "./useAxiosPrivate";
import { nanoid } from "nanoid";

const mockSuggestions: SuggestionSummary[] = [
  {
    id: nanoid(),
    image: BlueBottleLogo,
    title: "블루보틀",
    desc: "콜시츠키와 최초의 블루보틀",
  },
  {
    id: nanoid(),
    image: WomenImage1,
    title: "쥴리",
    desc: "여행과 커피를 사랑하는 평범한 여자입니다.",
  },
  {
    id: nanoid(),
    image: StarbucksLogo,
    title: "스타벅스",
    desc: "한국적인 디자인",
  },
  {
    id: nanoid(),
    image: MenImage1,
    title: "스테판",
    desc: "그린테라스의 바리스타로 일하고 있습니다.",
  },
  {
    id: nanoid(),
    image: WomenImage5,
    title: "김진주",
    desc: "커피 탐험 세계 탐험",
  },
  {
    id: nanoid(),
    image: WomenImage4,
    title: "사나",
    desc: "이색적인 스팟을 찾아보기로 결심 10일째",
  },
];

const useSuggestions = (onSuccess?: any, onError?: any) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchSuggestions = async ({
    signal,
  }: any): Promise<SuggestionSummary[]> => {
    return mockSuggestions;
    // const storiesResult = await axiosPrivate.get("/api/stories", {
    //   signal,
    // });

    // return storiesResult.data;
  };

  return useQuery([QUERY_KEY_SUGGESTIONS], fetchSuggestions, {
    onSuccess,
    onError,
  });
};

export default useSuggestions;

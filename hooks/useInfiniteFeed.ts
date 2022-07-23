import { QUERY_KEY_FEEDS } from "common/Constants";
import useAxiosPrivate from "./useAxiosPrivate";
import { useInfiniteQuery } from "@tanstack/react-query";
import WomenImage1 from "public/images/women-1.jpg";
import WomenImage2 from "public/images/women-2.jpg";
import WomenImage3 from "public/images/women-3.jpg";
import WomenImage4 from "public/images/women-4.jpg";
import FeedImage1 from "public/images/feed-image-1.jpg";
import FeedImage2 from "public/images/feed-image-2.jpg";
import FeedImage3 from "public/images/feed-image-3.jpg";
import FeedImage4 from "public/images/feed-image-4.jpg";
import { FeedItemProps } from "components/feeds/FeedItem";

export type InfiniteFeedProps = {
  perPage: number;
  onSuccess?: () => void;
  onError?: () => void;
};

const feedItems: FeedItemProps[] = [
  {
    id: "1",
    writer: {
      img: WomenImage1,
      name: "파멜라",
      region: "부산",
      country: "대한민국",
      desc: `‘HBAF’에서 오픈한 ‘Flavors by HBAF’는 유럽감성 가득 세련된 느낌의
            프렌치 스타일로 구성 된 공간이에요! 낮부터 늦은 저녁까지 브런치와
            와인을 즐길 수있고 이국적인 느낌의 넓은 실내 공간부터 야외에 있는
            듯한 느낌을 주는 푸릇한 테라스까지 메뉴는 정말 다 맛있었는데 보리를
            넣어 식감을 살리고 수비드한 소볼살과 튀긴 팽이버섯을 올려주는
            ‘Mushroom Risotto & Beef’ 고구마 튀김,양고기, 까망베르튀김은 필수🤤`,
    },
    createdAt: new Date().toUTCString(),
    likeCount: 44,
    likePeople: [
      {
        img: WomenImage3,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage4,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage1,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
    ],
    commentCount: 12,
    comments: [],
    images: [FeedImage1, FeedImage2],
  },
  {
    id: "2",
    writer: {
      img: WomenImage2,
      name: "파멜라",
      region: "부산",
      country: "대한민국",
      desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
    },
    likePeople: [
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
    ],
    createdAt: new Date().toUTCString(),
    likeCount: 11,
    commentCount: 7,
    comments: [],
    images: [FeedImage2, FeedImage1],
  },
  {
    id: "3",
    writer: {
      img: WomenImage3,
      name: "제니",
      region: "서울",
      country: "대한민국",
      desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
    },
    likePeople: [
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
    ],
    createdAt: new Date().toUTCString(),
    likeCount: 11,
    commentCount: 7,
    comments: [],
    images: [FeedImage3],
  },
  {
    id: "4",
    writer: {
      img: WomenImage4,
      name: "앤드류",
      region: "경기",
      country: "대한민국",
      desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
    },
    likePeople: [
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
      {
        img: WomenImage2,
        name: "파멜라",
        region: "부산",
        country: "대한민국",
        desc: `편안한 분위기, 시원스럽게 커다란 유리창이 매력적인 행궁동 카페 ‘모인’ 건물 2층에 위치해 푸른 잎이 우거진 키 큰 나무들과 행궁동 골목의 풍경을 바라볼 수 있어 좋아요.`,
      },
    ],
    createdAt: new Date().toUTCString(),
    likeCount: 11,
    commentCount: 7,
    comments: [],
    images: [FeedImage4],
  },
];

const useInfiniteFeed = ({
  perPage,
  onSuccess,
  onError,
}: InfiniteFeedProps) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchItems = async ({ pageParam = 1, signal }: any) => {
    return {
      items: feedItems,
      total: 100,
      nextPage: pageParam + 1,
      isLast: true,
    };
    // const result = await axiosPrivate.get(`/api/feed`, {
    //   params: { page: pageParam, perPage },
    //   signal,
    // });
    // const { items, total } = result.data;

    // return {
    //   items,
    //   total,
    //   nextPage: pageParam + 1,
    //   isLast: !(pageParam * perPage < total),
    // };
  };

  return useInfiniteQuery([QUERY_KEY_FEEDS], fetchItems, {
    onSuccess,
    onError,
    getNextPageParam: (lastPage) => {
      return lastPage.isLast ? undefined : lastPage.nextPage;
    },
  });
};

export default useInfiniteFeed;

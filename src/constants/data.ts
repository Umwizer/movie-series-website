import witcherBanner from "../assets/images/banner/banner.png";
import witcherLogo from "../assets/images/logos/witcher_logo.png";
import poster_1 from "../assets/images/posters/image 202.png";

type heroDataType = {
  banner: string | ImageData; // pdf, excel, doc,
  image: string | ImageData;
  title: string;
  description: string;
  rating: number | string;
  relatedTopMovie?: [
    { id: number; image: string | ImageData; url?: string; active: boolean },
  ];
};

export const heroData: heroDataType = {
  banner: witcherBanner,
  image: witcherLogo,
  title: "The Witcher",
  description:
    "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts",
  rating: 4,
  relatedTopMovie: [
    {
      id: 1,
      image: poster_1,
      url: "#",
      active: false,
    },
  ],
};

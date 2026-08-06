import witcherBanner from "../assets/images/banner/banner.png";
import witcherLogo from "../assets/images/logos/witcher_logo.png";
import poster_1 from "../assets/images/posters/image 202.png";
import missionBanner from "../assets/images/banner/mission-banner.png";
import missionLogo from "../assets/images/logos/mission-logo.png";

type heroDataType = {
  banner: string | ImageData;
  image: string | ImageData;
  title: string;
  description: string;
  rating: number;
};

type relatedTopMovie = {
  id: number;
  image: string | ImageData;
  url?: string;
  active: boolean;
}[];
type HeroType = { heroData: heroDataType[]; relatedTopMovie: relatedTopMovie };

export const heroData: HeroType = {
  heroData: [
    {
      banner: witcherBanner,
      image: witcherLogo,
      title: "The Witcher",
      description:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts",
      rating: 4,
    },
    {
      banner: missionBanner,
      image: missionLogo,
      title: "Mission: Impossible",
      description:
        "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands.",
      rating: 4.5,
    },
    {
      banner: witcherBanner,
      image: witcherLogo,
      title: "The Witcher",
      description:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts",
      rating: 4,
    },
  ],
  relatedTopMovie: [
    {
      id: 1,
      image: poster_1,
      url: "#",
      active: false,
    },
    {
      id: 2,
      image: poster_1,
      url: "#",
      active: false,
    },
    {
      id: 3,
      image: poster_1,
      url: "#",
      active: false,
    },
  ],
};

import witcherBanner from "../assets/images/banner/banner.png";
import witcherLogo from "../assets/images/logos/witcher_logo.png";
import poster_1 from "../assets/images/posters/image 202.png";
import mission_poster from "../assets/images/posters/mission_poster.png";
import missionBanner from "../assets/images/banner/mission-banner.png";
import missionLogo from "../assets/images/logos/mission-logo.png";
import poster1 from "../assets/images/posters/image 202.png";
import poster2 from "../assets/images/posters/image 77.png";
import poster3 from "../assets/images/posters/image 78.png";
import poster4 from "../assets/images/posters/image 91.png";
import missionPoster from "../assets/images/posters/mission_poster.png";

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
      rating: 3,
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
      rating: 3.5,
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
      image: mission_poster,
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


export const moreMovies = [
    {
        id: 1,
        title: "The Witcher",
        category: "Action / Fantasy",
        rating: 4.5,
        image: poster1,
    },
    {
        id: 2,
        title: "Mission: Impossible",
        category: "Action / Thriller",
        rating: 4.8,
        image: missionPoster,
    },
    {
        id: 3,
        title: "Cyber City",
        category: "Sci-Fi / Adventure",
        rating: 4.2,
        image: poster2,
    },
    {
        id: 4,
        title: "Shadow Realm",
        category: "Horror / Mystery",
        rating: 4.6,
        image: poster3,
    },
    {
        id: 5,
        title: "Blade Odyssey",
        category: "Anime / Sci-Fi",
        rating: 4.9,
        image: poster4,
    },
    {
        id: 6,
        title: "Dune Warriors",
        category: "Sci-Fi / Adventure",
        rating: 4.7,
        image: poster3,
    },
    {
        id: 7,
        title: "The Witcher S2",
        category: "Action / Fantasy",
        rating: 4.6,
        image: poster1,
    },
    {
        id: 8,
        title: "Neo Tokyo",
        category: "Animation / Action",
        rating: 4.4,
        image: poster2,
    },
    {
        id: 9,
        title: "Laugh Out Loud",
        category: "Comedy / Drama",
        rating: 4.3,
        image: poster4,
    },
    {
        id: 10,
        title: "Love in Tokyo",
        category: "Romance / Drama",
        rating: 4.7,
        image: poster2,
    },
    {
        id: 11,
        title: "Undercover Agent",
        category: "Crime / Thriller",
        rating: 4.8,
        image: missionPoster,
    },
    {
        id: 12,
        title: "Cosmic Voyage",
        category: "Documentary / Sci-Fi",
        rating: 4.9,
        image: poster1,
    },
];
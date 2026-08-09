import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from "../ui/card";
import { SectionHeader } from "../ui/SectionHeader";
import poster1 from "../../assets/images/posters/image 202.png";
import poster2 from "../../assets/images/posters/image 77.png";
import poster3 from "../../assets/images/posters/image 78.png";
import poster4 from "../../assets/images/posters/image 91.png";
import missionPoster from "../../assets/images/posters/mission_poster.png";

const trendingMovies = [
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
        category: "Sci-Fi / Epic",
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
        category: "Cyberpunk / Action",
        rating: 4.4,
        image: poster2,
    },
];

export const Trends = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;

            const canScrollLeft = e.deltaY < 0 && el.scrollLeft > 0;
            const canScrollRight = e.deltaY > 0 && el.scrollLeft < (el.scrollWidth - el.clientWidth - 1);

            if (canScrollLeft || canScrollRight) {
                e.preventDefault();
                el.scrollLeft += e.deltaY * 1.5;
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <TrendsSection>
            <SectionHeader 
                title="Trends"
                withOutline={true}
                withBorder={false}
                onSeeMore={() => console.log('See More clicked')}
            />
            <CardsContainer ref={scrollContainerRef}>
                {trendingMovies.map((movie) => (
                    <Card
                        key={movie.id}
                        title={movie.title}
                        category={movie.category}
                        rating={movie.rating}
                        image={movie.image}
                    />
                ))}
            </CardsContainer>
        </TrendsSection>
    );
};

const TrendsSection = styled.section`
    background-color: #030a1b;
    width: 100%;
    padding: 40px 50px;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;

const CardsContainer = styled.div`
    display: flex;
    gap: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px 4px 20px 4px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 100, 134, 0.5);
        border-radius: 4px;

        &:hover {
            background: rgba(0, 100, 134, 0.8);
        }
    }
`;
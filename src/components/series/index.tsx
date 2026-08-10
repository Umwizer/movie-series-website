import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from "../ui/card";
import { SectionHeader } from "../ui/SectionHeader";
import { FilterBar } from "../ui/FilterBar";
import { moreMovies as seriesMovies } from '../../constants/data';

const categories = [
    "All",
    "Action",
    "Sci-Fi",
    "Fantasy",
    "Thriller",
    "Horror",
    "Anime",
    "Comedy",
    "Drama",
    "Adventure",
    "Romance",
    "Crime",
    "Mystery",
    "Documentary",
    "Animation"
];

export const Series = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
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

    const filteredSeries = selectedCategories.includes("All") || selectedCategories.length === 0
        ? seriesMovies
        : seriesMovies.filter((item) =>
            selectedCategories.some((cat) =>
                item.category.toLowerCase().includes(cat.toLowerCase())
            )
          );

    return (
        <SeriesSection id="series">
            <SectionHeader 
                title="Series"
                withOutline={true}
                withBorder={false}
                onSeeMore={() => console.log('See More Series clicked')}
            />

            <FilterBar
                categories={categories}
                selectedCategories={selectedCategories}
                onSelectCategories={setSelectedCategories}
                multiSelect={true}
            />

            <CardsContainer ref={scrollContainerRef}>
                {filteredSeries.map((show) => (
                    <Card
                        key={show.id}
                        title={show.title}
                        category={show.category}
                        rating={show.rating}
                        image={show.image}
                    />
                ))}
            </CardsContainer>
        </SeriesSection>
    );
};

const SeriesSection = styled.section`
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
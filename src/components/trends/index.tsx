import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from "../ui/card";
import { SectionHeader } from "../ui/SectionHeader";
import { moreMovies as trendingMovies } from '../../constants/data';

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
        <TrendsSection id="trends">
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
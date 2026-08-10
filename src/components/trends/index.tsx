/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from "../ui/card";
import { SectionHeader } from "../ui/SectionHeader";
import type { TrandingMovies } from '../../types';
import { apiUrl, imageUrl, tmdbApiKey } from '../../utils';

export const Trends = () => {
    const [isLoadingTrends, setIsLoadingTrends] = useState(false);
    const [trends, setTrends] = useState<TrandingMovies | null>();
    const [timeWindow, setTimeWindow] = useState<"day" | "week">("day")
    const [error, SetError] = useState<any>();

    // redux toolkit


    const getTrendingMovies = async () => {
        try {
            setIsLoadingTrends(true)

            const fetchTrendings = await fetch(`${apiUrl}trending/movie/${timeWindow}?api_key=${tmdbApiKey}`);
            const result = await fetchTrendings.json() as TrandingMovies
            setTrends(result)
            setIsLoadingTrends(false)
        }
        catch (erro) {
            SetError(erro as any)
            setIsLoadingTrends(false)
        }
    }
    useEffect(() => {
        getTrendingMovies();
    }, [timeWindow])



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
            >
                <select onChange={(data) => {
                    setTimeWindow(data.target.value as "day" | "week")
                }}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                </select>
            </SectionHeader>
            <CardsContainer ref={scrollContainerRef}>
                {
                    isLoadingTrends ?
                        [1, 2, 3, 4, 5, 6,].map((i) => (
                            <div className='skeleton' key={i} />
                        ))
                        :
                        trends?.results?.map((movie) => (
                            <Card
                                key={movie.id}
                                title={movie.title}
                                category={movie.media_type}
                                rating={movie.vote_average / 2}
                                image={`${imageUrl}original/${movie.poster_path}`}
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

    .skeleton{
background:gray;
width: 190px;
    height: 280px;
    border-radius: 16px;
    
    
    }
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
        height: 1px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 100, 134, 0.5);
        border-radius: 4px;

        &:hover {
            background: rgba(0, 100, 134, 0.8);
        }
    }
`;
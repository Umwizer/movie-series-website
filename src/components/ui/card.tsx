import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPlus, FaCheck } from 'react-icons/fa';
import { Ratings } from './Ratings';
import defaultPoster from '../../assets/images/posters/image 202.png';

export interface CardProps {
    title?: string;
    category?: string;
    rating?: number;
    image?: string;
    onAdd?: () => void;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
    title = "The Witcher",
    category = "Action / Fantasy",
    rating = 4.5,
    image = defaultPoster,
    onAdd,
    onClick,
}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAdded((prev) => !prev);
        if (onAdd) onAdd();
    };

    return (
        <CardWrapper onClick={onClick}>
            <CardBackground $image={image} className="card-bg" />
            
            <BlackCornerFrame>
                <AddButton 
                    $isAdded={isAdded}
                    onClick={handleAddClick}
                    title={isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
                    type="button"
                >
                    {isAdded ? <FaCheck size={20} /> : <FaPlus size={20} />}
                </AddButton>
            </BlackCornerFrame>

            <Overlay className="card-overlay">
                <Title>{title}</Title>
                <CategoryText>{category}</CategoryText>
                <RatingRow>
                    <Ratings rating={rating} />
                    <RatingNumber>{rating.toFixed(1)}</RatingNumber>
                </RatingRow>
            </Overlay>
        </CardWrapper>
    );
};

const zoomResetAndIn = keyframes`
    0% {
        transform: scale(1.25);
    }
    10% {
        transform: scale(1.0);
    }
    100% {
        transform: scale(1.38);
    }
`;

const CardWrapper = styled.div`
    position: relative;
    width: 190px;
    height: 280px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s ease;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 150, 255, 0.25);

        .card-bg {
            animation: ${zoomResetAndIn} 1.4s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
        }

        .card-overlay {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CardBackground = styled.div<{ $image: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    transform: scale(1.25);
    transition: transform 0.5s ease;
`;

const BlackCornerFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background: transparent;
    border-right: 10px solid rgba(0, 0, 0, 0.6);
    border-bottom: 10px solid rgba(0, 0, 0, 0.6);
    border-bottom-right-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    overflow: hidden;
`;

const AddButton = styled.button<{ $isAdded: boolean }>`
    pointer-events: auto;
    width: 48px;
    height: 48px;
    background: ${props => props.$isAdded ? '#006486' : 'rgba(0, 0, 0, 0.45)'};
    backdrop-filter: blur(26px);
    -webkit-backdrop-filter: blur(26px);
    border: none;
    outline: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:hover {
        background: ${props => props.$isAdded ? '#004d66' : 'rgba(255, 255, 255, 0.25)'};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.92);
    }
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.05) 0%, 
        rgba(0, 0, 0, 0.5) 45%, 
        rgba(0, 0, 0, 0.95) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 16px;
    gap: 6px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.35s ease, transform 0.35s ease;
`;

const Title = styled.h3`
    color: #FFFFFF;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const CategoryText = styled.span`
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.3px;
`;



const RatingRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const RatingNumber = styled.span`
    color: #FFD700;
    font-size: 0.9rem;
    font-weight: 700;
`;
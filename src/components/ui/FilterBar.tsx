import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from './button';

export interface FilterBarProps {
    categories: string[];
    selectedCategories: string[];
    onSelectCategories: (categories: string[]) => void;
    multiSelect?: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
    categories,
    selectedCategories,
    onSelectCategories,
    multiSelect = true,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -280 : 280;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleCategoryClick = (category: string) => {
        if (!multiSelect) {
            onSelectCategories([category]);
            return;
        }

        if (category === "All") {
            onSelectCategories(["All"]);
            return;
        }

        // Remove "All" from active selection
        const currentWithoutAll = selectedCategories.filter((c) => c !== "All");

        let updated: string[];
        if (currentWithoutAll.includes(category)) {
            // Unselect category
            updated = currentWithoutAll.filter((c) => c !== category);
            if (updated.length === 0) {
                updated = ["All"];
            }
        } else {
            // Select category
            updated = [...currentWithoutAll, category];
        }

        onSelectCategories(updated);
    };

    return (
        <FilterWrapper>
            <ChevronButton onClick={() => scroll('left')} aria-label="Scroll left">
                <FaChevronLeft size={16} />
            </ChevronButton>

            <FilterContainer ref={scrollRef}>
                {categories.map((category) => {
                    const isActive = selectedCategories.includes(category);
                    return (
                        <Button
                            key={category}
                            label={category}
                            size="lg"
                            isToggle={true}
                            activeColor={"#ec5baa"}
                            active={isActive}
                            onToggle={() => handleCategoryClick(category)}
                        />
                    );
                })}
            </FilterContainer>

            <ChevronButton onClick={() => scroll('right')} aria-label="Scroll right">
                <FaChevronRight size={16} />
            </ChevronButton>
        </FilterWrapper>
    );
};

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    width: 100%;
    position: relative;
`;

const ChevronButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.2s ease;

    &:hover {
        background: #006486;
        border-color: #006486;
        transform: scale(1.08);
    }

    &:active {
        transform: scale(0.92);
    }
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 6px 4px 10px 4px;
    flex: 1;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        height: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 4px;
    }
`;

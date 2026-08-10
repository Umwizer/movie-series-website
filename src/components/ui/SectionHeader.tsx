import React from 'react';
import styled from 'styled-components';
import { Button, type ButtonVariant } from './button';
import { FaArrowRight } from 'react-icons/fa';

export interface SectionHeaderProps {
    title: string;
    seeMoreText?: string;
    withOutline?: boolean;
    withBorder?: boolean;
    labelColor?: string;
    onSeeMore?: () => void;
    children?: React.ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    seeMoreText = "See More",
    withOutline = true,
    withBorder = false,
    labelColor = "#006486",
    onSeeMore,
    children
}) => {
    const variant: ButtonVariant = withOutline ? "outline" : "primary";

    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <Button
                label={seeMoreText}
                variant={variant}
                withBorder={withBorder}
                labelColor={labelColor}
                size="lg"
                rightIcon={<FaArrowRight size={16} />}
                onClick={onSeeMore}
            />
            {children}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.5px;
`;

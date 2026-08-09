import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io"
import styled from "styled-components";

export const Ratings = ({ rating }: { rating: number }) => {
    const fullStar = Math.floor(rating);
    const color: string = "#c1ba21"

    if (rating > 5) rating = 5;

    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStar = Math.max(0, 5 - fullStar - halfStar);

    return (
        <RatingsContainer>
            {Array.from({ length: fullStar }).map((_, i) => (
                <IoMdStar key={`full-${i}`} color={color} />
            ))}

            {Array.from({ length: halfStar }).map((_, i) => (
                <IoMdStarHalf key={`half-${i}`} color={color} />
            ))}

            {Array.from({ length: emptyStar }).map((_, i) => (
                <IoMdStarOutline key={`empty-${i}`} color={color} />
            ))}
        </RatingsContainer>
    );
};

const RatingsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 1.1rem;
`;
import { useEffect, useState } from 'react';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import styled from 'styled-components';

type ratingInterface = {
    isHave: boolean,
    isFull: boolean,

}
// @ts-expect-error https://typescript-eslint.io/rules/ban-ts-comment
const calculateRating: ratingInterface[] = (ratingNumber: number) => {
    const ratingRange = 5;
    const result: ratingInterface[] = [];
    const roundedNumber = ratingRange % ratingNumber;
    console.log(roundedNumber)

    for (let i = 1; i <= ratingRange; i++) {
        if ( ratingNumber == ratingNumber) {
            result.push({
                isFull: false,
                isHave: true
            })
        } else if (roundedNumber < i) {
            result.push({
                isFull: true,
                isHave: false
            })
        } else {
            result.push({
                isFull: false,
                isHave: false
            })
        }


    }
    return result;
}
export const Rating = ({ ratingNumber }: { ratingNumber: number }) => {
    const [ratings, setRatings] = useState<ratingInterface[]>()
    // ratingNumber =  []  
    const rates: ratingInterface[] = calculateRating(ratingNumber);

    useEffect(() => {
        setRatings(rates)
    }, [rates])

    return (

        <RatingCainter>

            {ratings?.map((value, index) => {
                return <div key={index}>

                    {value.isHave && !value.isFull ? <IoMdStarHalf size={40} color='orange' /> : value.isFull && !value.isHave ? <IoMdStar size={40} color='orange' /> : <IoMdStarOutline size={40} color='orange' />} </div>
            })}
        </RatingCainter>
    )

}


const RatingCainter = styled.div`
display:flex;
flex-direction:row;

`
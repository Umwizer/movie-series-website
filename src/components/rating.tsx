import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import styled from 'styled-components';

type ratingInterface = {
    isHave: boolean,
    isFull: boolean,

}

const calculateRating = (ratingNumber: number) => {
    const result: ratingInterface[] = [];
    const rating = Math.floor(ratingNumber);
    const isHalf = (ratingNumber - rating) >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            result.push({
                isFull: true,
                isHave: false
            })
        } else if (i <= rating + 1 && isHalf) {
            result.push({
                isFull: false,
                isHave: true
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
    // ratingNumber =  []  
    const ratings = calculateRating(ratingNumber) as ratingInterface[];

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
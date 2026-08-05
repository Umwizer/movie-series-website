import { heroData } from '../../constants/data'
import styled from 'styled-components'
import { Rating } from '../rating'
export const Hero = () => {
    return (<HeroContainer>
        <div className='content'>
            <h1 className='banner-title'>
                {heroData.title}
            </h1>
            <p>
                {heroData.description}
            </p>
            <Rating ratingNumber={3.5} />
        </div>
    </HeroContainer>)
}


const HeroContainer = styled.div`
background-image:url(${heroData.banner.toString()});
    background-repeat: no-repeat;
    background-size: cover;
height:100%;
width:100%;
backgroun-position:top;
position:relative;

&::before{
position:absolute;
height:100%;
width:100%;
bottom:0px;
content: "";
background: linear-gradient(356deg, #000000, transparent, transparent);
}

.content{
position:absolute;
bottom:40px;
width:inherit;
padding:50px;
}
.banner-title{
color:white;
font-size:3rem;
font-weight:bolder
gap:5px;
}

p{
width:30%;
font-size:16px;
letter-spacing:1px;

}
`
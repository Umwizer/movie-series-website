import { heroData } from '../../constants/data'
import styled from 'styled-components'
import { Ratings } from '../ui/Ratings'
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { Button } from '../ui/button';

export const Hero = () => {
    const [activePoster, setActivePoster] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const total = heroData.relatedTopMovie?.length ?? 0;
            setActivePoster((prev) => total != prev + 1 ? prev + 1 : total % 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [])



    return (
        <HeroContainer $bannerUrl={heroData.heroData[activePoster].banner.toString()}>
            <div className='hero-logo'>
                <img src={heroData.heroData[activePoster].image.toString()} alt="hero Data Logo" />
            </div>
            <div className='content'>
                <h1 className='banner-title'>
                    {heroData.heroData[activePoster].title}
                </h1>
                <p>
                    {heroData.heroData[activePoster].description}
                </p>
                <div className='rating-container'>
                    <Ratings rating={heroData.heroData[activePoster].rating ?? 0} />
                    <p><span className='imdbTxt'>IMDb</span><span className='rating-number'>{(heroData.heroData[activePoster].rating ?? 0).toFixed(1)}</span></p>
                </div>
                <div className='main-btn'>
                    <Button
                        variant='primary'
                        size='md'
                        leftIcon={<FaPlay />}
                        label='Watch Movie'
                        onClick={() => console.log("Clicked watch")}
                    />
                    <Button
                        label={'More Info'}
                        variant="outline"
                        size='md'
                        onClick={() => console.log('Clicked more')}
                        rightIcon={<FaArrowRight />}
                    />
                </div>
            </div>
            <div className='posters'>
                {heroData.relatedTopMovie?.map((poster, index) => {
                    return <Poster className="poster-details" key={index}
                        $isActive={activePoster == index}
                        onClick={() => setActivePoster(index)}

                    >
                        <img src={poster.image.toString()} alt={poster.image.toString()} />
                    </Poster>
                })
                }
            </div>
        </HeroContainer>
    )
}


const HeroContainer = styled.div<{ $bannerUrl: string }>`
    background-image:url(${props => props.$bannerUrl});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    min-height: 700px;
    width: 100%;
    background-position: center top;
    position: relative;
    transition: background 2s;

.main-btn {
    display: flex;
    align-items: center;
    gap: 5px;
}

.imdbTxt {
    border-radius: 3px;
    background: rgb(230, 185, 30);
    padding: 3px;
    color: black;
}

.rating-number {
    margin-left: 5px;
    font-size: 1.2em;
    transition: opacity 2s ease, color 2s ease;
}

.rating-container {
    display: flex;
    align-items: center;
    gap: 5px;
}

&::before{
position:absolute;
height:100%;
width:100%;
bottom:0px;
content: "";
background: linear-gradient(356deg, #030a1b, transparent, transparent);
}
&::after{
position:absolute;
height:100%;
width:100%;
bottom:0px;
content: "";
background: linear-gradient(90deg, #000000, transparent, transparent);
z-index:0;
}

.content{
position:absolute;
bottom:30px;
width:inherit;
margin-left:50px;
z-index:1;
}
.banner-title{
color:white;
font-famili: math;
font-size:2.5rem;
font-weight:bolder
}

p{
width:40%;
font-size:18px;
font-family: math;
}
.hero-logo{
   position:absolute;
   top:20%;
   left:5%;
   z-index:1;
   transition:img 2s;

img {
width:80%;
height:inhert;
object-fit:cover;
}
}
.posters{
    z-index: 1;
    display: flex;
    position: absolute;
    align-items: self-end;
    bottom: 40px;
    right: 0;
    left: 50%;
}
`
const Poster = styled.div<{ $isActive: boolean }>`
border-radius:20px;
width:150px;
height:150px;
overflow:hidden;
border:1px solid #006486;
scale: ${props => props.$isActive ? 1.3 : 1};
z-index:${props => props.$isActive ? 2 : 1};
filter:${props => props.$isActive ? 'blur(0px)' : 'blur(5px)'};
transition: scale 1s;
cursor:pointer;

img{
width:100%;
}
`
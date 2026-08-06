import { heroData } from '../../constants/data'
import styled from 'styled-components'
import { Rating } from '../rating'


import { useEffect, useState } from 'react'
export const Hero = () => {
    const [activePoster, setActivePoster] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const total = heroData.relatedTopMovie?.length ?? 0;
            setActivePoster((prev) => total != prev + 1 ? prev + 1 : total % 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [])



    return (<HeroContainer bannerUrl={heroData.heroData[activePoster].banner.toString()}>
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
            <Rating ratingNumber={heroData.heroData[activePoster].rating ?? 0} />
        </div>
        <div className='posters'>
            {heroData.relatedTopMovie?.map((poster, index) => {
                return <Poster className="poster-details" key={index}
                    isActive={activePoster == index}
                    onClick={() => setActivePoster(index)}

                >
                    <img src={poster.image.toString()} alt={poster.image.toString()} />
                </Poster>
            })
            }
        </div>
    </HeroContainer>)
}


const HeroContainer = styled.div<{ bannerUrl: string }>`
background-image:url(${props => props.bannerUrl});
    background-repeat: no-repeat;
    background-size: cover;
height:100%;
width:100%;
backgroun-position:top;
position:relative;
transition:background 2s;

&::before{
position:absolute;
height:100%;
width:100%;
bottom:0px;
content: "";
background: linear-gradient(356deg, #000000, transparent, transparent);
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
bottom:40px;
width:inherit;
margin-left:50px;
z-index:1;
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
.hero-logo{
   position:absolute;
   top:20%;
   left:5%;
   z-index:1;
   transition:img 2s;

img {
width:100%;
height:inhert;
object-fit:cover;
}
}
.posters{
    z-index: 1;
    display: flex;
    position: absolute;
    align-items: self-end;
    bottom: 60px;
    right: 0;
    left: 50%;


}
`
const Poster = styled.div<{ isActive: boolean }>`
border-radius:20px;
width:200px;
height:200px;
overflow:hidden;
border:1px solid #006486;
scale: ${props => props.isActive ? 1.2 : 1};
z-index:${props => props.isActive ? 2 : 1};
filter:${props => props.isActive ? 'blur(0px)' : 'blur(5px)'};
transition: scale 2s;
cursor:pointer;

img{
width:100%;

}


`
import styled from "styled-components"
import logo from '../../assets/images/logos/logo.png'
import { useNavigate } from "react-router"
export const Navbar = () => {
    const route = useNavigate()
    const navItem: { label: string; url: string }[] = [
        {
            label: "Home",
            url: "home"

        },
        {
            label: "Pricing",
            url: "#pricing"

        },
        {
            label: "Movies",
            url: "#movies"

        },
        {
            label: "Series",
            url: "#series"

        }
    ]
    return <NavBarContainer>
        <div className="container">
            <div className="content">
                <img src={logo.toString()} alt="logo" />
                <ul>
                    {navItem.map((nav, index) => {
                        return <li key={index} onClick={() => route(nav.url)}>{nav.label}</li>
                    })}
                </ul>
            </div>
        </div>

    </NavBarContainer>
}
const NavBarContainer = styled.div`
position:fixed;
width:100%;
top:20px;
    left: 0;
    z-index: 2;
    &::after{
    position:fixed;
    top:20px;
    filter:blur(20px);
    margin:auto;
    }
.container{
backdrop-filter:blur(10px);
width:fit-content;
margin:auto;

}

.content{
margin:auto;
display:flex;
justify-content:center;
align-items:center;
border:1px solid #006486;
padding-left:20px;
padding-right:20px;
border-radius:10px;

img{
width:60px;
object-fit:contain;

}
}
    ul{
    list-style:none;
    display:flex;
    gap:20px;
    
    }

`
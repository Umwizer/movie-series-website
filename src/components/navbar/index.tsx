import styled from "styled-components"
import logo from '../../assets/images/logos/logo.png'
import { useNavigate } from "react-router"
import { IoIosNotifications, IoMdPerson } from "react-icons/io"
import { CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";


export const Navbar = () => {
    const [unread, setUnread] = useState<number>(1);
    const [activeNav, setActiveNav] = useState<string>("Home")
    const route = useNavigate()

    const navItem: { label: string; url: string }[] = [
        {
            label: "Home",
            url: "#"

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

        },
        {
            label: "Collections",
            url: "#collections"

        },
        {
            label: "FAQ",
            url: "#faq"

        }
    ]
    return <NavBarContainer>
        <div className="container">
            <div className="content">
                <img src={logo.toString()} alt="logo" />
                <ul>
                    {navItem.map((nav, index) => {
                        const isActive = activeNav === nav.label;

                        return (
                            <li
                                key={index}
                                className={isActive ? "active" : ""}
                                onClick={() => {
                                    setActiveNav(nav.label);
                                    route(nav.url);
                                }}
                            >
                                {nav.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="icons-container">
                <CiSearch />
                <div className="icon-wrapper" onClick={() => setUnread(0)}>
                    <IoIosNotifications />
                    {unread > 0 && <span className="badge-dot" />}
                </div>
                <IoMdPerson />
                <IoSunnyOutline />
            </div>
        </div>
    </NavBarContainer>
}
const NavBarContainer = styled.div`
      position: absolute;
      width: 90%;
      top: 20px;
      left: 50%;
      transform: translateX(-50%); /* Centers the fixed navbar on screen */
      z-index: 2;
    
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between; /* Pushes content to left & icons to right */
        backdrop-filter: blur(10px);
        border: 1px solid #006486;
        border-radius: 10px;
        padding: 10px 20px; /* Spacing inside the navbar container */
      }
    
      .content {
        display: flex;
        align-items: center; /* Vertically centers logo and text links */
        gap: 30px;
    
        img {
          width: 60px;
          object-fit: contain;
        }
      }
    
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        gap: 20px;
        margin: 0;
        padding: 0;
    
        li {
          cursor: pointer;
          padding-bottom: 4px;

          &.active {
            border-bottom: 4px solid #006486;
            border-radius: 4px;
          }
        }
      }
    
      .icon-wrapper{
        position: relative;
        display: inline-flex;
      }
    
      .icons-container {
        display: flex; /* Uncommented so icons use flexbox */
        align-items: center; /* Vertically aligns icons */
        gap: 15px;
        font-size: 1.5em; /* Optional: gives icons uniform size */
    
        svg {
          cursor: pointer;
        }
        
        .badge-dot {
            background-color:  #ff3b30;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            bottom: 0px;
            right: 0px;
            position: absolute;
        }
      }
    `;
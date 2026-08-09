import { useState } from "react";
import styled from "styled-components";
import logo from '../../assets/images/logos/logo.png';
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosNotifications, IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

export const Navbar = () => {
    const [unread, setUnread] = useState<number>(1);
    const navigate = useNavigate();
    const location = useLocation();

    const navItem: { label: string; url: string }[] = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Pricing",
            url: "/pricing"
        },
        {
            label: "Movies",
            url: "/movies"
        },
        {
            label: "Series",
            url: "/series"
        },
        {
            label: "Collections",
            url: "/collections"
        },
        {
            label: "FAQ",
            url: "/faq"
        }
    ];

    const handleNavClick = (nav: { label: string; url: string }) => {
        navigate(nav.url);
    };

    return (
        <NavBarContainer>
            <div className="container">
                <div className="content">
                    <img 
                        src={logo.toString()} 
                        alt="logo" 
                        onClick={() => {
                            navigate('/');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} 
                        style={{ cursor: 'pointer' }}
                    />
                    <ul>
                        {navItem.map((nav, index) => {
                            const isActive = location.pathname === nav.url || (nav.url === '/' && (location.pathname === '' || location.pathname === '/'));

                            return (
                                <li
                                    key={index}
                                    className={isActive ? "active" : ""}
                                    onClick={() => handleNavClick(nav)}
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
    );
};

const NavBarContainer = styled.div`
    position: absolute;
    width: 90%;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        backdrop-filter: blur(10px);
        border: 1px solid #006486;
        border-radius: 10px;
        padding: 10px 20px;
    }
    
    .content {
        display: flex;
        align-items: center;
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
    
    .icon-wrapper {
        position: relative;
        display: inline-flex;
    }
    
    .icons-container {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 1.5em;
    
        svg {
            cursor: pointer;
        }
        
        .badge-dot {
            background-color: #ff3b30;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            bottom: 0px;
            right: 0px;
            position: absolute;
        }
    }
`;
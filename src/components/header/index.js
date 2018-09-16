import React from 'react';
import styled from 'styled-components';


const BGheader = styled.div`
    padding-top:20px;
    background-image: url("images/top-bar-bg.png");
    background-repeat: repeat-x;
`

const Link = styled.a`
    text-align:center;
    height:106px;
    width:136px;
    font-size:15px;
    color:white;
    text-decoration: none;
    &:hover{
        background-image: url("images/top-bar-hover-bg.png");
        background-size:100%:
        z-index:10;
    }
`
const Li = styled.li`
    width:13vw;
`

const Menu = styled.ul`
    display: flex;
    justify-content:space-around; 
`

const Logo = styled.div`
    margin-top:-60px;
`


const Header = () => (
    <div className='pt-5'>
    <BGheader>
        <div className="container">
            <div className='row'>
                {/* left */}
                <div className='col-5'>
                    <Menu className="nav">
                        <Li className="nav-item">
                            <Link className="nav-link" href="#">SERVICES</Link>
                        </Li>
                        <Li className="nav-item">
                            <Link className="nav-link" href="#">PORTFOLIO</Link>
                        </Li>
                    </Menu>
                </div>
                {/* logo */}
                <Logo className='col-2'>
                    <img src="/images/logo.png"/>
                </Logo>
                {/* right */}
                <div className='col-5'>
                    <Menu className="nav">
                        <Li className="nav-item">
                            <Link className="nav-link active" href="#">OUR NEWS</Link>
                        </Li>
                        <Li className="nav-item">
                            <Link className="nav-link" href="#">CONTACT US</Link>
                        </Li>
                    </Menu>
                </div>
            </div>
            </div>
    </BGheader>
    </div>
);

export default Header
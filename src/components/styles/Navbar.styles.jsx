import styled from "styled-components";

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;   
    /* border: 2px solid #fff; */
    
    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        height: 60px;  
        
    }
`

export const Logo = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.logo};
    font-family: 'Shrikhand', cursive;

    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        font-size: 40px;
    }
    
`

export const NavLinks = styled.div`
    height: 100%;
    
    ul{
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1.5em;
        list-style: none;

        li{

            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }

    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        display: none;
    }
`

export const NavIcons = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1em;

    span{
        /* padding: 10px; */
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        border-radius: 50%;
        transition: box-shadow 250ms ease;
        cursor: pointer;


        &:hover{
            box-shadow: 0 0 10px 0 ${({ theme }) => theme.darkTheme.text_light};
        }
    }



    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        display: none;

    }
`

export const MobileNav = styled.div`
    padding: 10px 10px 100px 10px;
    position: fixed;
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.lightTheme.text_dark};
    top: 0;
    right: ${({ toggle }) => toggle ? '0' : '-100%'};
    transition: right 450ms ease-out;
` 

export const MobileNavClose = styled.div`
    width: 100%;
`

export const MobileNavIcons = styled.div`
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1em;
    
    span{
        height: 35px;
        width: 35px;
        border: 1px solid ${({ theme }) => theme.darkTheme.text_light};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`



export const MobileNavLinks = styled.div`
    display: flex;
    justify-content: center;
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 2em;
        list-style: none;
        
        li{

            a{
                color: #fff;
                text-decoration: none;
            }
        }
    }
`

export const MobileNavToggler = styled.div`
    display: none;

    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        display: flex;
        flex-direction: column;
        height: 100%;
        /* border: 1px solid #fff; */
        
        svg{
            margin: auto 0;
        }
    
    }
`
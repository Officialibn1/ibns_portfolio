import styled from "styled-components";


export const StyledHeader = styled.header`
    /* border: 2px solid #fff; */
    margin: 40px 0;
    width: 50%;

    h1{
        font-size: 1.5em;

        span{
            font-weight: 400;
        }
    }

    p{
        font-weight: 300;
    }

    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        width: 100%;
    }
`

export const HeaderButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px 0;
    border-top: 3px solid ${({ theme }) => theme.darkTheme.text_light};
`

export const HeaderButtons = styled.button`
    padding: 10px 20px;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 0px;
    cursor: pointer;
    transition: box-shadow 350ms ease;

    &:hover{
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.darkTheme.text_light};
    }
`
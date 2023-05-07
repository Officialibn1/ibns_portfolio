import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 20px 60px;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.mediaQuaries.mobile}) {
        padding: 5px 20px;
    }
`

export default Container;
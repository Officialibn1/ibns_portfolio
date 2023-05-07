import { HeaderButtons, HeaderButtonsContainer, StyledHeader } from "./styles/Header.styles";

const Header = () => {
    return (
        <StyledHeader>
            
            <h1>
                <span>Hi there, I am</span> Isah Ibn Muhammad.
            </h1>

            <br /><br />
            
            <p>
                A Frontend Web Developer with great experience in building cross-device responsive websites for my clients.
                <br /><br />
                I'm looking forward in working with you on your next project bring it to life and deliver you the best and quality service.  
            </p>

            <HeaderButtonsContainer>
                <HeaderButtons>
                    Hire Me
                </HeaderButtons>
                
                <HeaderButtons>
                    Contact Me
                </HeaderButtons>
                
                <HeaderButtons>
                    Download CV
                </HeaderButtons>

            </HeaderButtonsContainer>
        </StyledHeader>
    );
}

export default Header;

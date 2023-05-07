import { ThemeProvider } from "styled-components"
import themeValue from "./GlobalTheme"
import Container from "./components/styles/Container"
import Navbar from "./components/Navbar"



function App() {



  return (
    <ThemeProvider theme={themeValue} >
      <>

        <Container>
          <Navbar />
        </Container>
      
      </>
    </ThemeProvider>
  )
}

export default App

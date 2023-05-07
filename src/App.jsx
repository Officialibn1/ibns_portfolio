import { ThemeProvider } from "styled-components"
import themeValue from "./GlobalTheme"
import Container from "./components/styles/Container"
import Navbar from "./components/Navbar"
import Header from "./components/Header"



function App() {



  return (
    <ThemeProvider theme={themeValue} >
      <>

        {/* Navbar */}
        <Container>
          <Navbar />
        </Container>

        {/* Header */}
        <Container>
          <Header />
        </Container>
      
      </>
    </ThemeProvider>
  )
}

export default App

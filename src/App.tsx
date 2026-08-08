import React from "react"
import { HomeContainer } from "./styles/index"
import { Hero } from "./components"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer";

const App = () => {

  return <React.Fragment>
    <HomeContainer mode="dark">
      <Navbar />
      <Hero />
      <Footer />
    </HomeContainer>
  </React.Fragment>
}
export default App
import React from "react"
import { HomeContainer } from "./styles/index"
import { Hero } from "./components"
import { Navbar } from "./components/navbar"


const App = () => {

  return <React.Fragment>
    <HomeContainer mode="dark">
      <Navbar />
      <Hero />
    </HomeContainer>
  </React.Fragment>
}
export default App
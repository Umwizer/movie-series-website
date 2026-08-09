import React from "react"
import { HomeContainer } from "./styles/index"
import { Hero, Navbar } from "./components"
import { Trends } from "./components/trends/trends"

const App = () => {

  return <React.Fragment>
    <HomeContainer mode="dark">
      <Navbar />
      <Hero />
      <Trends/>
    </HomeContainer>
  </React.Fragment>
}
export default App
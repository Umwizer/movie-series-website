import React from "react"
import { HomeContainer } from "./styles/index"
import { Hero } from "./components"


const App = () => {

  return <React.Fragment>
    <HomeContainer mode="dark">
      <Hero />
    </HomeContainer>
  </React.Fragment>
}
export default App
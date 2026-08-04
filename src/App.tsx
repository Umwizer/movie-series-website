import React, { useEffect, useState } from "react"
import { HomeContainer } from "./styles/index"
import { Button } from "./components/button"
import { useNavigate } from "react-router"

const App = () => {
  const navigation = useNavigate()
  const [isClick, setClick] = useState<boolean>(false)
  useEffect(() => {
    console.log(isClick)
  }, [
    isClick
  ])
  return <React.Fragment>
    <HomeContainer mode="dark">
      <form>
        <Button label="Save" type="button" variants="danger" action={() => navigation("/about")} />
      </form>
      <Button label="cancel" action={() => { setClick(true) }} variants="outline" />
    </HomeContainer>
  </React.Fragment>
}
export default App
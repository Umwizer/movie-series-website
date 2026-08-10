import GoldenGlobeAwardImage from "../../assets/images/golden_globe/golden_globe_awards.png"
import GoldenGlobeAwardMovies from "../../assets/images/golden_globe/golden_globe_movies.png"
import { Button } from "../ui/button"

export const GoldenGlobe = () => {

    return (
        <div>
            <img src={GoldenGlobeAwardImage.toString()} alt="golden image awards" />
            <img src={GoldenGlobeAwardMovies.toString()} alt="golden image movies" />
            <Button
                label="Watching Golden Globe 2024 Movies"
                variant={"outline"}
                size={"lg"}
            />
        </div>
    )
}